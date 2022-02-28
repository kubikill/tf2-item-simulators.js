import { Item } from "./common";

export interface tfObjectDataEntry {
    /** Name of item */
    name: string;
    /** Name of the image file for this item */
    image_name: string;
}

export interface tfEffectDataEntry extends tfObjectDataEntry {
    /** Item schema number */
    schema: number;
}

export interface tfItemDataEntry extends tfObjectDataEntry {
    /** Item schema number */
    schema: number;
    /** Item schema number for the strangifier version of this item */
    strangifier_schema?: number;
    /** Item schema number for decorated item's skin */
    paint_kit_num?: number;
}

export interface tfCrate {
    /**
     * Crate entry from dataCrates obj
     * @example
     * ```id: 5``` would refer to the Refreshing Summer Cooler
     */
    id: number;

    /**
     *
     */
    dataEntry: tfObjectDataEntry;

    /** Series number of crate.
     *  If null, the crate is treated as seriesless.
     * @default null
     */
    series: number | "seriesless";

    /** List of items that can be unboxed from the crate */
    loot: Item[];

    /** Array of unusual effects from dataEffects object that are obtainable from this crate */
    effects?: number[];

    /**
     * Controls if unusuals can be unboxed from this crate, and in which way.
     * @default null
     *
     * @param null - No unusuals can be unboxed.
     * @param shared_pool - Picks a random item from the shared unusual pool. Each item has an equal chance of being picked.
     * @param graded - Picks a random item from this crate that can have Unusual quality. Items with higher grade have less chance of being picked.
     * @param equal - Picks a random item from this crate that can have Unusual quality. Each items has an equal chance of being picked.
     */
    unusual?: null | "shared_pool" | "graded" | "equal";
    /**
     * Controls if chances should be automatically set for all items in the crate.
     * @default null
     *
     * @param null - Uses individual chances for each item.
     * @param grade - Items have their chance set according to their grade.
     * @param equal - All items have an equal chance of being picked.
     */
    autoChance?: null | "graded" | "graded_low" | "equal";
    /**
     * Controls if shared bonus items should be obtainable from this crate.
     */
    bonus?: boolean;
    /**
     *
     */
    exclusiveBonus?: null | {
        /**
         * Array of exclusive bonus items obtainable from this crate.
         */
        loot: Item[];
        /**
         * Chance of obtaining an exclusive bonus items item, in percent.
         */
        chance: number;
        /**
         * If true, only 1 exclusive bonus item can be obtained per unbox.
         */
        once?: boolean;
    };
}

export interface tfCrateConstructor extends Omit<tfCrate, "dataEntry"> {}

export interface tfItem {
    /**
     * ID of item
     */
    id: number;
    /**
     * Item data of item
     */
    dataEntry: tfItemDataEntry;
    /**
     * Type of item
     * @default "item"
     *
     * @param item - Generic item - weapon, cosmetic, tool, etc.
     * @param weapon_skin - For weapon skins or war paint. Has wear assigned to it.
     * @param strangifier - For strangifiers.
     * @param killstreak_kit - For killstreak kits.
     */
    type?: "item" | "weapon_skin" | "strangifier" | "unusualifier" | "killstreak_kit";
    /**
     * Default quality of item
     * @default "unique"
     */
    defaultQuality?: "unique" | "strange" | "haunted" | "unusual";
    /**
     * Grade of item
     */
    grade?: tfGrade;
    /**
     * Chance of obtaining item in percent.
     */
    chance?: number;
    /**
     * If item can be unboxed as unusual.
     * Used only if the crate the item is in has the unusual property set to "graded" or "equal".
     */
    mayBeUnusual?: boolean;
    /**
     * List of possible non-default qualities this item may have.
     */
    possibleQualities?: {
        /**
         * List of names of qualities.
         */
        quality: string[];
        /**
         * Chance of obtaining quality in percent.
         */
        chance: number;
    }[];
}

export interface tfItemConstructor extends Omit<tfItem, "dataEntry"> {}

export interface tfUnboxResult {
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

export type tfWear =
    | "factory_new"
    | "minimal_wear"
    | "field_tested"
    | "well_worn"
    | "battle_scarred";

export type tfGrade = "civilian" | "freelance" | "mercenary" | "commando" | "assassin" | "elite";

export type tfKillstreakSheen =
    | "team_shine"
    | "hot_rod"
    | "manndarin"
    | "deadly_daffodil"
    | "agonizing_emerald"
    | "mean_green"
    | "villainous_violet";

export type tfKillstreaker =
    | "cerebral_discharge"
    | "fire_horns"
    | "flames"
    | "hypno_beam"
    | "incinerator"
    | "singularity"
    | "tornado";

export type tfSettings = {
    eotlGlitchedUnusuals: boolean;
    sniperVsSpyUnusuals: boolean;
    eventMode:
        | false
        | "halloween11"
        | "halloween12"
        | "halloween13"
        | "halloween14"
        | "halloween15"
        | "halloween16"
        | "halloween17"
        | "halloween18"
        | "halloween19"
        | "halloween20"
        | "halloween21"
        | "smissmas19"
        | "smissmas20"
        | "smissmas21";
    noExtraItems: boolean;
    forceUnusual: false | "always" | "never";
    forceStrange: false | "always" | "never";
    forceWear: false | tfWear;
    forceGrade: false | tfGrade;
    forceKillstreak: false | "normal" | "specialized" | "professional";
    forceBonusItems: false | 0 | 1 | 2 | 3;
    forceUnusualifier: boolean;
};
