import { tfObjectDataEntry } from "./types";

const dataCrates: { [crateId: number]: tfObjectDataEntry } = {
  1: {
    name: "Mann Co. Supply Crate",
    image_name: "mann_co_supply_crate",
  },
  2: {
    name: "Festive Winter Crate",
    image_name: "festive_winter_crate",
  },
  3: {
    name: "Mann Co. Audition Reel",
    image_name: "mann_co_audition_reel",
  },
  4: {
    name: "Concealed Killer Weapons Case",
    image_name: "concealed_killer_weapons_case",
  },
  5: {
    name: "Refreshing Summer Cooler",
    image_name: "refreshing_summer_cooler",
  },
  6: {
    name: "Salvaged Mann Co. Supply Crate",
    image_name: "salvaged_mann_co_supply_crate",
  },
  7: {
    name: "Naughty Winter Crate",
    image_name: "naughty_winter_crate",
  },
  8: {
    name: "Nice Winter Crate",
    image_name: "nice_winter_crate",
  },
  9: {
    name: "Scorched Crate",
    image_name: "scorched_crate",
  },
  10: {
    name: "Fall Crate",
    image_name: "fall_crate",
  },
  11: {
    name: "Eerie Crate",
    image_name: "eerie_crate",
  },
  12: {
    name: "Naughty Winter Crate 2012",
    image_name: "naughty_winter_crate_2012",
  },
  13: {
    name: "Nice Winter Crate 2012",
    image_name: "nice_winter_crate_2012",
  },
  14: {
    name: "Robo Community Crate",
    image_name: "robo_community_crate",
  },
  15: {
    name: "Select Reserve Mann Co. Supply Crate",
    image_name: "select_reserve_mann_co_supply_crate",
  },
  16: {
    name: "Summer Appetizer Crate",
    image_name: "summer_appetizer_crate",
  },
  17: {
    name: "Red Summer 2013 Cooler",
    image_name: "red_summer_2013_cooler",
  },
  18: {
    name: "Orange Summer 2013 Cooler",
    image_name: "orange_summer_2013_cooler",
  },
  19: {
    name: "Yellow Summer 2013 Cooler",
    image_name: "yellow_summer_2013_cooler",
  },
  20: {
    name: "Green Summer 2013 Cooler",
    image_name: "green_summer_2013_cooler",
  },
  21: {
    name: "Aqua Summer 2013 Cooler",
    image_name: "aqua_summer_2013_cooler",
  },
  22: {
    name: "Blue Summer 2013 Cooler",
    image_name: "blue_summer_2013_cooler",
  },
  23: {
    name: "Brown Summer 2013 Cooler",
    image_name: "brown_summer_2013_cooler",
  },
  24: {
    name: "Black Summer 2013 Cooler",
    image_name: "black_summer_2013_cooler",
  },
  25: {
    name: "Fall 2013 Acorns Crate",
    image_name: "fall_2013_acorns_crate",
  },
  26: {
    name: "Fall 2013 Gourd Crate",
    image_name: "fall_2013_gourd_crate",
  },
  27: {
    name: "Spooky Crate",
    image_name: "spooky_crate",
  },
  28: {
    name: "Naughty Winter Crate 2013",
    image_name: "naughty_winter_crate_2013",
  },
  29: {
    name: "Nice Winter Crate 2013",
    image_name: "nice_winter_crate_2013",
  },
  30: {
    name: "Mann Co. Strongbox",
    image_name: "mann_co_strongbox",
  },
  31: {
    name: "Mann Co. Supply Munition",
    image_name: "mann_co_supply_munition",
  },
  32: {
    name: "Bread Box",
    image_name: "bread_box",
  },
  33: {
    name: "Mann Co. Stockpile Crate",
    image_name: "mann_co_stockpile_crate",
  },
  34: {
    name: "Unlocked Creepy Scout Crate",
    image_name: "unlocked_creepy_scout_crate",
  },
  35: {
    name: "Unlocked Creepy Soldier Crate",
    image_name: "unlocked_creepy_soldier_crate",
  },
  36: {
    name: "Unlocked Creepy Pyro Crate",
    image_name: "unlocked_creepy_pyro_crate",
  },
  37: {
    name: "Unlocked Creepy Demo Crate",
    image_name: "unlocked_creepy_demo_crate",
  },
  38: {
    name: "Unlocked Creepy Heavy Crate",
    image_name: "unlocked_creepy_heavy_crate",
  },
  39: {
    name: "Unlocked Creepy Engineer Crate",
    image_name: "unlocked_creepy_engineer_crate",
  },
  40: {
    name: "Unlocked Creepy Medic Crate",
    image_name: "unlocked_creepy_medic_crate",
  },
  41: {
    name: "Unlocked Creepy Sniper Crate",
    image_name: "unlocked_creepy_sniper_crate",
  },
  42: {
    name: "Unlocked Creepy Spy Crate",
    image_name: "unlocked_creepy_spy_crate",
  },
  43: {
    name: "Limited Late Summer Crate",
    image_name: "limited_late_summer_crate",
  },
  44: {
    name: "End of the Line Community Crate",
    image_name: "end_of_the_line_community_crate",
  },
  45: {
    name: "Naughty Winter Crate 2014",
    image_name: "naughty_winter_crate_2014",
  },
  46: {
    name: "Nice Winter Crate 2014",
    image_name: "nice_winter_crate_2014",
  },
  47: {
    name: "Powerhouse Weapons Case",
    image_name: "powerhouse_weapons_case",
  },
  48: {
    name: "Gun Mettle Cosmetic Case",
    image_name: "gun_mettle_cosmetic_case",
  },
  49: {
    name: "Quarantined Collection Case",
    image_name: "quarantined_collection_case",
  },
  50: {
    name: "Confidential Collection Case",
    image_name: "confidential_collection_case",
  },
  51: {
    name: "Gargoyle Case",
    image_name: "gargoyle_case",
  },
  52: {
    name: "Pyroland Weapons Case",
    image_name: "pyroland_weapons_case",
  },
  53: {
    name: "Warbird Weapons Case",
    image_name: "warbird_weapons_case",
  },
  54: {
    name: "Tough Break Cosmetic Case",
    image_name: "tough_break_cosmetic_case",
  },
  55: {
    name: "Mayflower Cosmetic Case",
    image_name: "mayflower_cosmetic_case",
  },
  56: {
    name: "Creepy Crawly Case",
    image_name: "creepy_crawly_case",
  },
  57: {
    name: "Unlocked Winter 2016 Cosmetic Case",
    image_name: "unlocked_winter_2016_cosmetic_case",
  },
  58: {
    name: "Rainy Day Cosmetic Case",
    image_name: "rainy_day_cosmetic_case",
  },
  59: {
    name: "Abominable Cosmetic Case",
    image_name: "abominable_cosmetic_case",
  },
  60: {
    name: "Unleash the Beast Cosmetic Case",
    image_name: "unleash_the_beast_cosmetic_case",
  },
  61: {
    name: "Jungle Jackpot War Paint Case",
    image_name: "jungle_jackpot_war_paint_case",
  },
  62: {
    name: "Infernal Reward War Paint Case",
    image_name: "infernal_reward_war_paint_case",
  },
  63: {
    name: "Decorated War Hero War Paint Civilian Grade Keyless Case",
    image_name: "war_paint_civilian_grade_keyless_case",
  },
  64: {
    name: "Contract Campaigner War Paint Civilian Grade Keyless Case",
    image_name: "war_paint_civilian_grade_keyless_case",
  },
  65: {
    name: "Winter 2017 Cosmetic Case",
    image_name: "winter_2017_cosmetic_case",
  },
  66: {
    name: "Winter 2017 War Paint Case",
    image_name: "winter_2017_war_paint_case",
  },
  67: {
    name: "Blue Moon Cosmetic Case",
    image_name: "blue_moon_cosmetic_case",
  },
  68: {
    name: "Violet Vermin Case",
    image_name: "violet_vermin_case",
  },
  69: {
    name: "Scream Fortress X War Paint Case",
    image_name: "scream_fortress_x_war_paint_case",
  },
  70: {
    name: "Winter 2018 Cosmetic Case",
    image_name: "winter_2018_cosmetic_case",
  },
  71: {
    name: "Summer 2019 Cosmetic Case",
    image_name: "summer_2019_cosmetic_case",
  },
  72: {
    name: "Unlocked Cosmetic Crate Scout",
    image_name: "unlocked_cosmetic_crate_scout",
  },
  73: {
    name: "Unlocked Cosmetic Crate Soldier",
    image_name: "unlocked_cosmetic_crate_soldier",
  },
  74: {
    name: "Unlocked Cosmetic Crate Pyro",
    image_name: "unlocked_cosmetic_crate_pyro",
  },
  75: {
    name: "Unlocked Cosmetic Crate Demo",
    image_name: "unlocked_cosmetic_crate_demo",
  },
  76: {
    name: "Unlocked Cosmetic Crate Heavy",
    image_name: "unlocked_cosmetic_crate_heavy",
  },
  77: {
    name: "Unlocked Cosmetic Crate Engineer",
    image_name: "unlocked_cosmetic_crate_engineer",
  },
  78: {
    name: "Unlocked Cosmetic Crate Medic",
    image_name: "unlocked_cosmetic_crate_medic",
  },
  79: {
    name: "Unlocked Cosmetic Crate Sniper",
    image_name: "unlocked_cosmetic_crate_sniper",
  },
  80: {
    name: "Unlocked Cosmetic Crate Spy",
    image_name: "unlocked_cosmetic_crate_spy",
  },
  81: {
    name: "Unlocked Cosmetic Crate Multi-Class",
    image_name: "unlocked_cosmetic_crate_multi_class",
  },
  82: {
    name: "Spooky Spoils Case",
    image_name: "spooky_spoils_case",
  },
  83: {
    name: "Winter 2019 Cosmetic Case",
    image_name: "winter_2019_cosmetic_case",
  },
  84: {
    name: "Winter 2019 War Paint Case",
    image_name: "winter_2019_war_paint_case",
  },
  85: {
    name: "Summer 2020 Cosmetic Case",
    image_name: "summer_2020_cosmetic_case",
  },
  86: {
    name: "Wicked Windfall Case",
    image_name: "wicked_windfall_case",
  },
  87: {
    name: "Scream Fortress XII War Paint Case",
    image_name: "scream_fortress_xii_war_paint_case",
  },
  88: {
    name: "Winter 2020 Cosmetic Case",
    image_name: "winter_2020_cosmetic_case",
  },
  89: {
    name: "Winter 2020 War Paint Case",
    image_name: "winter_2020_war_paint_case",
  },
  90: {
    name: "Summer 2021 Cosmetic Case",
    image_name: "summer_2021_cosmetic_case",
  },
  91: {
    name: "Crimson Cache Case",
    image_name: "crimson_cache_case",
  },
  92: {
    name: "Scream Fortress XIII War Paint Case",
    image_name: "scream_fortress_xiii_war_paint_case",
  },
  93: {
    name: "Winter 2021 Cosmetic Case",
    image_name: "winter_2021_cosmetic_case",
  },
};

export default dataCrates;
