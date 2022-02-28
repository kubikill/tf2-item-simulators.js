import dataCrates from "./cratenames";
import dataItems from "./itemnames";
import {
    tfCrate,
    tfCrateConstructor,
    tfGrade,
    tfItem,
    tfItemConstructor,
    tfItemDataEntry,
    tfKillstreaker,
    tfKillstreakSheen,
    tfObjectDataEntry,
    tfWear,
} from "./types";

export class Crate implements tfCrate {
    id: number;
    dataEntry: tfObjectDataEntry;
    series: number | "seriesless";
    loot: Item[];
    effects: null | number[];
    unusual: null | "shared_pool" | "graded" | "equal";
    autoChance: null | "graded" | "graded_low" | "equal";
    bonus: boolean;
    exclusiveBonus: null | {
        loot: Item[];
        chance: number;
        once?: boolean;
    };
    constructor(op: tfCrateConstructor) {
        this.id = op.id;
        this.dataEntry = dataCrates[op.id];
        this.series = op.series;
        this.loot = op.loot;
        if (typeof op.effects === "undefined") {
            this.effects = [];
        } else {
            this.effects = op.effects;
        }
        if (typeof op.unusual === "undefined") {
            this.unusual = null;
        } else {
            this.unusual = op.unusual;
        }
        if (typeof op.autoChance === "undefined") {
            this.autoChance = null;
        } else {
            this.autoChance = op.autoChance;
        }
        if (typeof op.bonus === "undefined") {
            this.bonus = false;
        } else {
            this.bonus = true;
        }
        if (typeof op.exclusiveBonus === "undefined") {
            this.exclusiveBonus = null;
        } else {
            this.exclusiveBonus = op.exclusiveBonus;
        }
    }
}

export class Item implements tfItem {
    id: number;
    dataEntry: tfItemDataEntry;
    type: "item" | "weapon_skin" | "strangifier" | "unusualifier" | "killstreak_kit";
    defaultQuality: "unique" | "strange" | "haunted" | "unusual";
    grade: null | "civilian" | "freelance" | "mercenary" | "commando" | "assassin" | "elite";
    chance: null | number;
    possibleQualities: {
        quality: string[];
        chance: number;
    }[];

    constructor(op: tfItemConstructor) {
        /* Options:


id - Determines item name and icon, which are pulled from itemnames.js
chance - Chance of getting that item. 1 = 0.01%, 10000 = 100%. Can be left blank if crate autoChance is set to true.
quality - Determines item quality and/or behavior:
    / 0 - Unusual
    / 1 - Unique
    / 2 - Strange
    / 3 - Haunted
    / 4 - 90% chance to be Unique, 10% chance to be Strange
    / 5 - Decorated - 10% Battle Scarred, 20% Well Worn, 40% Field Tested, 20% Minimal Wear, 10% Factory New
    6 - Decorated - Same as 5, but also has 10% chance to be Strange and 1% chance to be Unusual
    / 7 - 99% to be Unique, 1% to be Unusual
    / 8 - 90% chance to be Unique, 10% to be Strange Haunted
    / 9 - Unique, but can be replaced: 10% to be Strange or 1% to be Unusual.
    / 10 - Same as 4, but it also has a 1% chance to be Unusual. Can be both Strange and Unusual
    / 11 - Killstreak Kit. 65% to be normal, 25% to be Specialized, 10% to be Professional.
    / 12 - Strangifier
grade - Item grade.
        */
        this.id = op.id;
        this.dataEntry = dataItems[op.id];
        this.type = op.type;

        if (typeof op.defaultQuality === "undefined") {
            this.defaultQuality = "unique";
        } else {
            this.defaultQuality = op.defaultQuality;
        }

        if (typeof op.type === "undefined") {
            this.type = "item";
        } else {
            this.type = op.type;
        }

        if (typeof op.grade === "undefined") {
            this.grade = null;
        } else {
            this.grade = op.grade;
        }

        if (typeof op.chance === "undefined") {
            this.chance = null;
        } else {
            this.chance = op.chance;
        }

        if (typeof op.possibleQualities === "undefined") {
            this.possibleQualities = [];
        } else {
            this.possibleQualities = op.possibleQualities;
        }
    }
}

export const CHANCES = {
    unusual: 0.66,
    strange: 10,
    bonus_item: [/* 0 */ 60, /* 1 */ 32, /* 2 */ 7.7, /* 3 */ 0.3],
    grade: [80, 16, 3.2, 0.8],
    wear: {
        factory_new: 10,
        minimal_wear: 20,
        field_tested: 40,
        well_worn: 20,
        battle_scarred: 10,
    },
    unusualifier: 1.5,
    killstreak_kits: {
        normal: 75,
        specialized: 20,
        professional: 5,
    },
} as const;

export const KILLSTREAK_EFFECTS: {
    readonly sheens: tfKillstreakSheen[];
    readonly killstreakers: tfKillstreaker[];
} = {
    sheens: [
        "team_shine",
        "hot_rod",
        "manndarin",
        "deadly_daffodil",
        "agonizing_emerald",
        "mean_green",
        "villainous_violet",
    ],
    killstreakers: [
        "cerebral_discharge",
        "fire_horns",
        "flames",
        "hypno_beam",
        "incinerator",
        "singularity",
        "tornado",
    ],
};

export const WEARS = [
    "factory_new",
    "minimal_wear",
    "field_tested",
    "well_worn",
    "battle_scarred",
] as const;

export const GRADES = [
    "civilian",
    "freelance",
    "mercenary",
    "commando",
    "assassin",
    "elite",
] as const;

function toFixedFloorNumber(num: number, digits: number) {
    let pow = Math.pow(10, digits);
    return Math.floor(num * pow) / pow;
}

/**
 * Generates a random integer number between min (included) and max (excluded).
 */
export function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Generates a random integer number between min and max (both included).
 */
export function randomInclusiveNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a random float number between min (included) and max (excluded).
 */
export function randomFloatNumber(min: number, max: number, digits: number = 2): number {
    return toFixedFloorNumber(Math.random() * (max - min) + min, digits);
}

/**
 * Picks a random element from an array.
 * @param array - Array to pick elements from
 */
export function randomArrayElement<Type>(array: Type[]): Type {
    return array[randomNumber(0, array.length)];
}
