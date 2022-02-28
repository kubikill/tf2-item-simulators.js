import {
    tfCrate,
    tfGrade,
    tfItem,
    tfItemDataEntry,
    tfKillstreaker,
    tfKillstreakSheen,
    tfObjectDataEntry,
    tfSettings,
    tfUnboxResult,
    tfWear,
} from "./types";
import {
    CHANCES,
    GRADES,
    Item,
    KILLSTREAK_EFFECTS,
    randomArrayElement,
    randomFloatNumber,
    randomInclusiveNumber,
    randomNumber,
    WEARS,
} from "./common";
import {
    eotlGlitchedUnusuals,
    eventModeCrateList,
    globalBonusItemArray,
    paintBonusArray,
    sharedUnusualPool,
    sniperVsSpyUnusuals,
    strangePartBonusArray,
    unusualEffectGroups,
    unusualifierArray,
} from "./itemLists";
import { crateArray } from "./crate";
import dataItems from "./itemnames";
import dataEffects from "./unusualeffects";
import dataCrates from "./cratenames";

const settings: tfSettings = {
    eotlGlitchedUnusuals: false,
    sniperVsSpyUnusuals: false,
    eventMode: false,
    noExtraItems: false,
    forceUnusual: false,
    forceStrange: false,
    forceWear: false,
    forceGrade: false,
    forceKillstreak: false,
    forceBonusItems: false,
    forceUnusualifier: false,
};

class UnboxedItem implements tfUnboxResult {
    constructor() {
        this.quality = [];
    }
    id: number;
    itemData: tfItemDataEntry;
    quality: string[];
    type: "item" | "weapon_skin" | "strangifier" | "unusualifier" | "killstreak_kit";
    effect?: number;
    effectData: tfObjectDataEntry;
    wear?: null | tfWear;
    killstreak?: {
        sheen?: tfKillstreakSheen;
        killstreaker?: tfKillstreaker;
    };
    isBonusItem: boolean;
}

function randomKillstreakSheen(): tfKillstreakSheen {
    return randomArrayElement(KILLSTREAK_EFFECTS.sheens);
}

function randomKillstreaker(): tfKillstreaker {
    return randomArrayElement(KILLSTREAK_EFFECTS.killstreakers);
}

function randomWear(): tfWear {
    const generatedNumber = randomFloatNumber(0, 100);
    let total = 0;

    for (let wear of WEARS) {
        total += CHANCES.wear[wear];
        if (total >= generatedNumber) {
            return wear;
        }
    }

    throw new Error("Error while generating a random wear. Dangit!");
}

function randomGrade(range: "low" | "high" = "high"): tfGrade {
    let filteredGradeArray: tfGrade[];

    if (range === "high") {
        filteredGradeArray = GRADES.slice(2, 6);
    } else {
        filteredGradeArray = GRADES.slice(0, 4);
    }

    const generatedNumber = randomFloatNumber(0, 100);
    let total = 0;

    for (let i = 0; i < 4; i++) {
        total += CHANCES.grade[i];
        if (total >= generatedNumber) {
            return filteredGradeArray[i];
        }
    }

    throw new Error("Error while generating a random grade. Dangit!");
}

function randomBonusItemNumber(): number {
    let total = 0;
    let generatedNumber = randomFloatNumber(0, 100);
    for (let i = 0; i < CHANCES.bonus_item.length; i++) {
        total += CHANCES.bonus_item[i];
        if (total >= generatedNumber) {
            return i;
        }
    }
}

function isPossibleUnusual(item: tfItem) {
    return item.mayBeUnusual;
}

function parseItem(item: tfItem, crate: number, settings: tfSettings): UnboxedItem {
    let crateData = crateArray[crate];
    let unboxedItem = new UnboxedItem();
    unboxedItem.id = item.id;
    unboxedItem.itemData = dataItems[unboxedItem.id];

    // Item quality

    unboxedItem.quality.push(item.defaultQuality);

    for (let possibleQuality of item.possibleQualities) {
        if (
            (settings.forceStrange && possibleQuality.quality.includes("strange")) ||
            randomFloatNumber(0, 100) <= possibleQuality.chance
        ) {
            if (unboxedItem.quality[0] === "unique") {
                unboxedItem.quality = [...possibleQuality.quality];
            } else {
                unboxedItem.quality = [...unboxedItem.quality, ...possibleQuality.quality];
            }
        }
    }

    // Unusual effects

    if (unboxedItem.quality.includes("unusual")) {
        if (settings.eventMode && eventModeCrateList[settings.eventMode].includes(crate)) {
            unboxedItem.effect = randomArrayElement(unusualEffectGroups[settings.eventMode]);
            unboxedItem.effectData = dataEffects[unboxedItem.effect];
        } else {
            unboxedItem.effect = randomArrayElement(crateData.effects);
            unboxedItem.effectData = dataEffects[unboxedItem.effect];
        }
    }

    // Handling items by type

    unboxedItem.type = item.type;

    switch (item.type) {
        case "weapon_skin":
            if (settings.forceWear) {
                unboxedItem.wear = settings.forceWear;
            } else {
                unboxedItem.wear = randomWear();
            }
            break;
        case "killstreak_kit":
            let total = CHANCES.killstreak_kits.normal;
            let generatedNumber = randomFloatNumber(0, 100);

            if (
                settings.forceKillstreak === "normal" ||
                (!settings.forceKillstreak && total >= generatedNumber)
            ) {
                break;
            } else if (
                settings.forceKillstreak === "specialized" ||
                (!settings.forceKillstreak &&
                    total + CHANCES.killstreak_kits.specialized >= generatedNumber)
            ) {
                unboxedItem.killstreak = {
                    sheen: randomKillstreakSheen(),
                };
                break;
            } else {
                unboxedItem.killstreak = {
                    sheen: randomKillstreakSheen(),
                    killstreaker: randomKillstreaker(),
                };
                break;
            }
    }

    return unboxedItem;
}

function unboxCrate(crateToBeUnboxed: number, overrideSettings?: tfSettings): tfUnboxResult[] {
    const localSettings = { ...settings, ...overrideSettings };

    let crate: tfCrate = crateArray[crateToBeUnboxed];

    let outputArray: UnboxedItem[] = [];

    // Choosing item

    if (
        crate.unusual != null &&
        localSettings.forceUnusual != "never" &&
        (localSettings.forceUnusual === "always" || randomFloatNumber(0, 100) < CHANCES.unusual)
    ) {
        // Item is unusual
        let unusualArray: number[] = [];
        unusualSwitch: switch (crate.unusual) {
            case "shared_pool":
                unusualArray = [...sharedUnusualPool];
                if (
                    (crate.series <= 87 || (crate.id >= 33 && crate.id <= 42)) &&
                    localSettings.eotlGlitchedUnusuals
                ) {
                    unusualArray = [...unusualArray, ...eotlGlitchedUnusuals];
                }
                if (crate.series >= 1 && crate.series <= 55 && localSettings.sniperVsSpyUnusuals) {
                    unusualArray = [...unusualArray, ...sniperVsSpyUnusuals];
                }

                let chosenRandomUnusual = randomArrayElement(unusualArray);

                outputArray.push(
                    parseItem(
                        new Item({
                            id: chosenRandomUnusual,
                            defaultQuality: "unusual",
                        }),
                        crateToBeUnboxed,
                        localSettings
                    )
                );

                if (
                    crate.series === 87 /* End of the Line Community Crate */ &&
                    !localSettings.noExtraItems
                ) {
                    outputArray.push(
                        ...unboxCrate(crateToBeUnboxed, { ...localSettings, noExtraItems: true })
                    );
                }
                break;

            case "graded":
                let chosenGrade: tfGrade;
                if (localSettings.forceGrade) {
                    chosenGrade = localSettings.forceGrade;
                } else {
                    chosenGrade = randomGrade("high");
                }

                let filteredGradedUnusualArray: tfItem[] = [];

                while (filteredGradedUnusualArray.length === 0) {
                    console.log(chosenGrade);
                    filteredGradedUnusualArray = crate.loot.filter((item) => {
                        return item.grade === chosenGrade && isPossibleUnusual(item);
                    });

                    if (GRADES.indexOf(chosenGrade) >= 2) {
                        chosenGrade = GRADES[GRADES.indexOf(chosenGrade) - 1];
                    } else {
                        console.warn(
                            "Failed to find an unusual with specific grade or lower! Falling back to unboxing normal item..."
                        );
                        break unusualSwitch;
                    }
                }

                let chosenRandomGradeUnusual = randomArrayElement(filteredGradedUnusualArray);

                outputArray.push(
                    parseItem(
                        new Item({
                            ...chosenRandomGradeUnusual,
                            defaultQuality: "unusual",
                            possibleQualities: [],
                        }),
                        crateToBeUnboxed,
                        localSettings
                    )
                );
                break;

            case "equal":
                let filteredEqualUnusualArray = crate.loot.filter(isPossibleUnusual);
                if (filteredEqualUnusualArray.length > 0) {
                    let chosenRandomEqualUnusual = randomArrayElement(filteredGradedUnusualArray);
                    outputArray.push(
                        parseItem(
                            new Item({
                                ...chosenRandomEqualUnusual,
                                defaultQuality: "unusual",
                                possibleQualities: [],
                            }),
                            crateToBeUnboxed,
                            localSettings
                        )
                    );
                } else {
                    console.warn(
                        "This crate does not have any possible unusuals to unbox! Falling back to unboxing normal item..."
                    );
                    break unusualSwitch;
                }
        }
    } else {
        // Item isn't unusual
        switch (crate.autoChance) {
            case "graded":
            case "graded_low":
                let chosenGrade: tfGrade;

                if (localSettings.forceGrade) {
                    chosenGrade = localSettings.forceGrade;
                } else if (crate.autoChance === "graded") {
                    chosenGrade = randomGrade("high");
                } else {
                    chosenGrade = randomGrade("low");
                }

                let itemPool = crate.loot.filter((item) => {
                    return item.grade === chosenGrade;
                });

                if (itemPool.length === 0) {
                    throw new Error(`Couldn't find items with grade ${chosenGrade} or lower!`);
                }

                outputArray.push(
                    parseItem(randomArrayElement(itemPool), crateToBeUnboxed, localSettings)
                );
                break;
            case "equal":
                outputArray.push(
                    parseItem(randomArrayElement(crate.loot), crateToBeUnboxed, localSettings)
                );
                break;
            case null:
                let total = 0;
                let generatedNumber = randomFloatNumber(0, 100);

                for (let itemInLoot of crate.loot) {
                    total += itemInLoot.chance;
                    if (total >= generatedNumber) {
                        outputArray.push(parseItem(itemInLoot, crateToBeUnboxed, localSettings));
                        break;
                    }
                }
                break;
        }
    }

    // How many bonus items to unbox

    let numberOfBonusItems: number;

    if (crate.bonus || crate.exclusiveBonus) {
        if (crate.exclusiveBonus && crate.exclusiveBonus.once) {
            numberOfBonusItems = 1;
        } else {
            numberOfBonusItems = randomBonusItemNumber();
        }
    }

    // Handling bonus items

    for (let i = 0; i < numberOfBonusItems; i++) {
        if (crate.bonus && randomFloatNumber(0, 100) <= CHANCES.unusualifier) {
            let randomlyChosenTaunt = randomArrayElement(unusualifierArray);
            outputArray.push(
                parseItem(
                    new Item({
                        id: randomlyChosenTaunt,
                        type: "unusualifier",
                    }),
                    crateToBeUnboxed,
                    localSettings
                )
            );
        } else if (
            crate.exclusiveBonus &&
            randomFloatNumber(0, 100) <= crate.exclusiveBonus.chance
        ) {
            outputArray.push(
                parseItem(
                    randomArrayElement(crate.exclusiveBonus.loot),
                    crateToBeUnboxed,
                    localSettings
                )
            );
        } else if (crate.bonus) {
            let randomBonusItem = randomArrayElement(globalBonusItemArray);

            switch (randomBonusItem) {
                case "paint":
                    randomBonusItem = randomArrayElement(paintBonusArray);
                    break;
                case "strange_part":
                    randomBonusItem = randomArrayElement(strangePartBonusArray);
                    break;
            }

            outputArray.push(
                parseItem(
                    new Item({
                        id: randomBonusItem,
                    }),
                    crateToBeUnboxed,
                    localSettings
                )
            );
        }
    }

    return outputArray;
}

export default unboxCrate;
