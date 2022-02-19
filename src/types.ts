import { Item } from "./crate";

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
  id: tfObjectDataEntry;

  /** Series number of crate.
   *  If null, the crate is treated as seriesless.
   * @default null
   */
  series?: number;

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
  autoChance?: null | "graded" | "equal";
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

export interface tfCrateConstructor extends Omit<tfCrate, "id"> {
  id: number;
}

export interface tfItem {
  /**
   * ID of item
   */
  id: tfItemDataEntry;
  /**
   * Type of item
   * @default "item"
   *
   * @param item - Generic item - weapon, cosmetic, tool, etc.
   * @param weapon_skin - For weapon skins or war paint. Has wear assigned to it.
   * @param strangifier - For strangifiers.
   * @param killstreak_kit - For killstreak kits.
   */
  type?: "item" | "weapon_skin" | "strangifier" | "killstreak_kit";
  /**
   * Default quality of item
   * @default "unique"
   */
  defaultQuality?: "unique" | "strange" | "haunted";
  /**
   * Grade of item
   */
  grade?:
    | "civilian"
    | "freelance"
    | "mercenary"
    | "commando"
    | "assassin"
    | "elite";
  /**
   * Chance of obtaining item in percent.
   */
  chance?: number;
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
    /**
     * If true, obtaining this quality will not allow obtaining any other possible qualities.
     *
     * @default false
     */
    exclusive?: boolean;
    /**
     * If true, obtaining this quality will replace the item's default quality.
     * Other possible qualities will not be replaced.
     *
     * @default true
     */
    replace?: boolean;
  }[];
}

export interface tfItemConstructor extends Omit<tfItem, "id"> {
  id: number;
}
