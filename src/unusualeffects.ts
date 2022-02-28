import { tfEffectDataEntry } from "./types";

const dataEffects: { [effectId: number]: tfEffectDataEntry } = {
    1: {
        name: "Burning Flames",
        image_name: "burning_flames",
        schema: 13,
    },
    2: {
        name: "Circling Heart",
        image_name: "circling_heart",
        schema: 19,
    },
    3: {
        name: "Circling Peace Sign",
        image_name: "circling_peace_sign",
        schema: 18,
    },
    4: {
        name: "Circling TF Logo",
        image_name: "circling_tf_logo",
        schema: 11,
    },
    5: {
        name: "Green Confetti",
        image_name: "green_confetti",
        schema: 6,
    },
    6: {
        name: "Green Energy",
        image_name: "green_energy",
        schema: 9,
    },
    7: {
        name: "Haunted Ghosts",
        image_name: "haunted_ghosts",
        schema: 8,
    },
    8: {
        name: "Massed Flies",
        image_name: "massed_flies",
        schema: 12,
    },
    9: {
        name: "Purple Confetti",
        image_name: "purple_confetti",
        schema: 7,
    },
    10: {
        name: "Purple Energy",
        image_name: "purple_energy",
        schema: 10,
    },
    11: {
        name: "Scorching Flames",
        image_name: "scorching_flames",
        schema: 14,
    },
    12: {
        name: "Searing Plasma",
        image_name: "searing_plasma",
        schema: 15,
    },
    13: {
        name: "Sunbeams",
        image_name: "sunbeams",
        schema: 17,
    },
    14: {
        name: "Vivid Plasma",
        image_name: "vivid_plasma",
        schema: 16,
    },
    15: {
        name: "'72",
        image_name: "72",
        schema: 3004,
    },
    16: {
        name: "Fountain of Delight",
        image_name: "fountain_of_delight",
        schema: 3005,
    },
    17: {
        name: "Holy Grail",
        image_name: "holy_grail",
        schema: 3003,
    },
    18: {
        name: "Mega Strike",
        image_name: "mega_strike",
        schema: 3010,
    },
    19: {
        name: "Midnight Whirlwind",
        image_name: "midnight_whirlwind",
        schema: 3008,
    },
    20: {
        name: "Screaming Tiger",
        image_name: "screaming_tiger",
        schema: 3006,
    },
    21: {
        name: "Showstopper",
        image_name: "showstopper",
        schema: 3001,
    },
    22: {
        name: "Silver Cyclone",
        image_name: "silver_cyclone",
        schema: 3009,
    },
    23: {
        name: "Skill Gotten Gains",
        image_name: "skill_gotten_gains",
        schema: 3007,
    },
    24: {
        name: "Isotope",
        image_name: "isotope",
        schema: 702,
    },
    25: {
        name: "Hot",
        image_name: "hot",
        schema: 701,
    },
    26: {
        name: "Cool",
        image_name: "cool",
        schema: 703,
    },
    27: {
        name: "Energy Orb",
        image_name: "energy_orb",
        schema: 704,
    },
    28: {
        name: "Blizzardy Storm",
        image_name: "blizzardy_storm",
        schema: 30,
    },
    29: {
        name: "Bubbling",
        image_name: "bubbling",
        schema: 34,
    },
    30: {
        name: "Nuts n' Bolts",
        image_name: "nuts_n_bolts",
        schema: 31,
    },
    31: {
        name: "Orbiting Fire",
        image_name: "orbiting_fire",
        schema: 33,
    },
    32: {
        name: "Orbiting Planets",
        image_name: "orbiting_planets",
        schema: 32,
    },
    33: {
        name: "Smoking",
        image_name: "smoking",
        schema: 35,
    },
    34: {
        name: "Steaming",
        image_name: "steaming",
        schema: 36,
    },
    35: {
        name: "Stormy Storm",
        image_name: "stormy_storm",
        schema: 29,
    },
    36: {
        name: "Cauldron Bubbles",
        image_name: "cauldron_bubbles",
        schema: 39,
    },
    37: {
        name: "Cloudy Moon",
        image_name: "cloudy_moon",
        schema: 38,
    },
    38: {
        name: "Eerie Orbiting Fire",
        image_name: "eerie_orbiting_fire",
        schema: 40,
    },
    39: {
        name: "Flaming Lantern",
        image_name: "flaming_lantern",
        schema: 37,
    },
    40: {
        name: "Harvest Moon",
        image_name: "harvest_moon",
        schema: 45,
    },
    41: {
        name: "It's A Secret To Everybody",
        image_name: "its_a_secret_to_everybody",
        schema: 46,
    },
    42: {
        name: "Knifestorm",
        image_name: "knifestorm",
        schema: 43,
    },
    43: {
        name: "Misty Skull",
        image_name: "misty_skull",
        schema: 44,
    },
    44: {
        name: "Stormy 13th Hour",
        image_name: "stormy_13th_hour",
        schema: 47,
    },
    45: {
        name: "Anti-Freeze",
        image_name: "anti_freeze",
        schema: 69,
    },
    46: {
        name: "Electrostatic",
        image_name: "electrostatic",
        schema: 67,
    },
    47: {
        name: "Green Black Hole",
        image_name: "green_black_hole",
        schema: 71,
    },
    48: {
        name: "Memory Leak",
        image_name: "memory_leak",
        schema: 65,
    },
    49: {
        name: "Overclocked",
        image_name: "overclocked",
        schema: 66,
    },
    50: {
        name: "Phosphorous",
        image_name: "phosphorous",
        schema: 63,
    },
    51: {
        name: "Power Surge",
        image_name: "power_surge",
        schema: 68,
    },
    52: {
        name: "Roboactive",
        image_name: "roboactive",
        schema: 72,
    },
    53: {
        name: "Sulphurous",
        image_name: "sulphurous",
        schema: 64,
    },
    54: {
        name: "Time Warp",
        image_name: "time_warp",
        schema: 70,
    },
    55: {
        name: "Aces High",
        image_name: "aces_high",
        schema: 59,
    },
    56: {
        name: "Cloud 9",
        image_name: "cloud_9",
        schema: 58,
    },
    57: {
        name: "Dead Presidents",
        image_name: "dead_presidents",
        schema: 60,
    },
    58: {
        name: "Disco Beat Down",
        image_name: "disco_beat_down",
        schema: 62,
    },
    59: {
        name: "Kill-a-Watt",
        image_name: "kill_a_watt",
        schema: 56,
    },
    60: {
        name: "Miami Nights",
        image_name: "miami_nights",
        schema: 61,
    },
    61: {
        name: "Terror-Watt",
        image_name: "terror_watt",
        schema: 57,
    },
    62: {
        name: "Arcana",
        image_name: "arcana",
        schema: 73,
    },
    63: {
        name: "Chiroptera Venenata",
        image_name: "chiroptera_venenata",
        schema: 75,
    },
    64: {
        name: "Darkblaze",
        image_name: "darkblaze",
        schema: 79,
    },
    65: {
        name: "Demonflame",
        image_name: "demonflame",
        schema: 80,
    },
    66: {
        name: "Hellfire",
        image_name: "hellfire",
        schema: 78,
    },
    67: {
        name: "Poisoned Shadows",
        image_name: "poisoned_shadows",
        schema: 76,
    },
    68: {
        name: "Something Burning This Way Comes",
        image_name: "something_burning_this_way_comes",
        schema: 77,
    },
    69: {
        name: "Spellbound",
        image_name: "spellbound",
        schema: 74,
    },
    70: {
        name: "Amaranthine",
        image_name: "amaranthine",
        schema: 82,
    },
    71: {
        name: "Bonzo The All-Gnawing",
        image_name: "bonzo_the_all_gnawing",
        schema: 81,
    },
    72: {
        name: "Ghastly Ghosts Jr",
        image_name: "ghastly_ghosts_jr",
        schema: 85,
    },
    73: {
        name: "Haunted Phantasm Jr",
        image_name: "haunted_phantasm_jr",
        schema: 86,
    },
    74: {
        name: "Stare From Beyond",
        image_name: "stare_from_beyond",
        schema: 83,
    },
    75: {
        name: "Ooze",
        image_name: "ooze",
        schema: 84,
    },
    76: {
        name: "Death at Dusk",
        image_name: "death_at_dusk",
        schema: 90,
    },
    77: {
        name: "Frostbite",
        image_name: "frostbite",
        schema: 87,
    },
    78: {
        name: "Molten Mallard",
        image_name: "molten_mallard",
        schema: 88,
    },
    79: {
        name: "Morning Glory",
        image_name: "morning_glory",
        schema: 89,
    },
    80: {
        name: "Abduction",
        image_name: "abduction",
        schema: 91,
    },
    81: {
        name: "Atomic",
        image_name: "atomic",
        schema: 92,
    },
    82: {
        name: "Subatomic",
        image_name: "subatomic",
        schema: 93,
    },
    83: {
        name: "Electric Hat Protector",
        image_name: "electric_hat_protector",
        schema: 94,
    },
    84: {
        name: "Magnetic Hat Protector",
        image_name: "magnetic_hat_protector",
        schema: 95,
    },
    85: {
        name: "Voltaic Hat Protector",
        image_name: "voltaic_hat_protector",
        schema: 96,
    },
    86: {
        name: "Galactic Codex",
        image_name: "galactic_codex",
        schema: 97,
    },
    87: {
        name: "Ancient Codex",
        image_name: "ancient_codex",
        schema: 98,
    },
    88: {
        name: "Nebula",
        image_name: "nebula",
        schema: 99,
    },
    89: {
        name: "Death by Disco",
        image_name: "death_by_disco",
        schema: 100,
    },
    90: {
        name: "It's a mystery to everyone",
        image_name: "its_a_mystery_to_everyone",
        schema: 101,
    },
    91: {
        name: "It's a puzzle to me",
        image_name: "its_a_puzzle_to_me",
        schema: 102,
    },
    92: {
        name: "Ether Trail",
        image_name: "ether_trail",
        schema: 103,
    },
    93: {
        name: "Nether Trail",
        image_name: "nether_trail",
        schema: 104,
    },
    94: {
        name: "Ancient Eldritch",
        image_name: "ancient_eldritch",
        schema: 105,
    },
    95: {
        name: "Eldritch Flame",
        image_name: "eldritch_flame",
        schema: 106,
    },
    96: {
        name: "Neutron Star",
        image_name: "neutron_star",
        schema: 107,
    },
    97: {
        name: "Starstorm Slumber",
        image_name: "starstorm_slumber",
        schema: 110,
    },
    98: {
        name: "Starstorm Insomnia",
        image_name: "starstorm_insomnia",
        schema: 109,
    },
    99: {
        name: "Tesla Coil",
        image_name: "tesla_coil",
        schema: 108,
    },
    100: {
        name: "Brain Drain",
        image_name: "brain_drain",
        schema: 111,
    },
    101: {
        name: "Open Mind",
        image_name: "open_mind",
        schema: 112,
    },
    102: {
        name: "Head of Steam",
        image_name: "head_of_steam",
        schema: 113,
    },
    103: {
        name: "Galactic Gateway",
        image_name: "galactic_gateway",
        schema: 114,
    },
    104: {
        name: "Eldritch Opening",
        image_name: "the_eldritch_opening",
        schema: 115,
    },
    105: {
        name: "Dark Doorway",
        image_name: "the_dark_doorway",
        schema: 116,
    },
    106: {
        name: "Ring of Fire",
        image_name: "ring_of_fire",
        schema: 117,
    },
    107: {
        name: "Vicious Circle",
        image_name: "vicious_circle",
        schema: 118,
    },
    108: {
        name: "White Lightning",
        image_name: "white_lightning",
        schema: 119,
    },
    109: {
        name: "Omniscient Orb",
        image_name: "omniscient_orb",
        schema: 120,
    },
    110: {
        name: "Clairvoyance",
        image_name: "clairvoyance",
        schema: 121,
    },
    111: {
        name: "Fifth Dimension",
        image_name: "fifth_dimension",
        schema: 122,
    },
    112: {
        name: "Vicious Vortex",
        image_name: "vicious_vortex",
        schema: 123,
    },
    113: {
        name: "Menacing Miasma",
        image_name: "menacing_miasma",
        schema: 124,
    },
    114: {
        name: "Abyssal Aura",
        image_name: "abyssal_aura",
        schema: 125,
    },
    115: {
        name: "Wicked Wood",
        image_name: "wicked_wood",
        schema: 126,
    },
    116: {
        name: "Ghastly Grove",
        image_name: "ghastly_grove",
        schema: 127,
    },
    117: {
        name: "Mystical Medley",
        image_name: "mystical_medley",
        schema: 128,
    },
    118: {
        name: "Ethereal Essence",
        image_name: "ethereal_essence",
        schema: 129,
    },
    119: {
        name: "Twisted Radiance",
        image_name: "twisted_radiance",
        schema: 130,
    },
    120: {
        name: "Violet Vortex",
        image_name: "violet_vortex",
        schema: 131,
    },
    121: {
        name: "Verdant Vortex",
        image_name: "verdant_vortex",
        schema: 132,
    },
    122: {
        name: "Valiant Vortex",
        image_name: "valiant_vortex",
        schema: 133,
    },
    123: {
        name: "Sparkling Lights",
        image_name: "sparkling_lights",
        schema: 134,
    },
    124: {
        name: "Frozen Icefall",
        image_name: "frozen_icefall",
        schema: 135,
    },
    125: {
        name: "Fragmented Gluons",
        image_name: "fragmented_gluons",
        schema: 136,
    },
    126: {
        name: "Fragmented Quarks",
        image_name: "fragmented_quarks",
        schema: 137,
    },
    127: {
        name: "Fragmented Photons",
        image_name: "fragmented_photons",
        schema: 138,
    },
    128: {
        name: "Defragmenting Reality",
        image_name: "defragmenting_reality",
        schema: 139,
    },
    129: {
        name: "Fragmenting Reality",
        image_name: "fragmenting_reality",
        schema: 141,
    },
    130: {
        name: "Refragmenting Reality",
        image_name: "refragmenting_reality",
        schema: 142,
    },
    131: {
        name: "Snowfallen",
        image_name: "snowfalled",
        schema: 143,
    },
    132: {
        name: "Snowblinded",
        image_name: "snowblinded",
        schema: 144,
    },
    133: {
        name: "Pyroland Daydream",
        image_name: "pyroland_daydream",
        schema: 145,
    },
    134: {
        name: "Verdatica",
        image_name: "verdatica",
        schema: 147,
    },
    135: {
        name: "Aromatica",
        image_name: "aromatica",
        schema: 148,
    },
    136: {
        name: "Chromatica",
        image_name: "chromatica",
        schema: 149,
    },
    137: {
        name: "Prismatica",
        image_name: "prismatica",
        schema: 150,
    },
    138: {
        name: "Bee Swarm",
        image_name: "bee_swarm",
        schema: 151,
    },
    139: {
        name: "Frisky Fireflies",
        image_name: "frisky_fireflies",
        schema: 152,
    },
    140: {
        name: "Smoldering Spirits",
        image_name: "smoldering_spirits",
        schema: 153,
    },
    141: {
        name: "Wandering Wisps",
        image_name: "wandering_wisps",
        schema: 154,
    },
    142: {
        name: "Kaleidoscope",
        image_name: "kaleidoscope",
        schema: 155,
    },
    143: {
        name: "Green Giggler",
        image_name: "green_giggler",
        schema: 156,
    },
    144: {
        name: "Laugh-O-Lantern",
        image_name: "laugh_o_lantern",
        schema: 157,
    },
    145: {
        name: "Plum Prankster",
        image_name: "plum_prankster",
        schema: 158,
    },
    146: {
        name: "Pyroland Nightmare",
        image_name: "pyroland_nightmare",
        schema: 159,
    },
    147: {
        name: "Gravelly Ghoul",
        image_name: "gravelly_ghoul",
        schema: 160,
    },
    148: {
        name: "Vexed Volcanics",
        image_name: "vexed_volcanics",
        schema: 161,
    },
    149: {
        name: "Gourdian Angel",
        image_name: "gourdian_angel",
        schema: 162,
    },
    150: {
        name: "Pumpkin Party",
        image_name: "pumpkin_party",
        schema: 163,
    },
    151: {
        name: "Blighted Snowstorm",
        image_name: "blighted_snowstorm",
        schema: 170,
    },
    152: {
        name: "Distant Dream",
        image_name: "distant_dream",
        schema: 168,
    },
    153: {
        name: "Divine Desire",
        image_name: "divine_desire",
        schema: 167,
    },
    154: {
        name: "Frozen Fractals",
        image_name: "frozen_fractals",
        schema: 164,
    },
    155: {
        name: "Genus Plasmos",
        image_name: "genus_plasmos",
        schema: 172,
    },
    156: {
        name: "Lavender Landfall",
        image_name: "lavender_landfall",
        schema: 165,
    },
    157: {
        name: "Mirthful Mistletoe",
        image_name: "mirthful_mistletoe",
        schema: 175,
    },
    158: {
        name: "Pale Nimbus",
        image_name: "pale_nimbus",
        schema: 171,
    },
    159: {
        name: "Serenus Lumen",
        image_name: "serenus_lumen",
        schema: 173,
    },
    160: {
        name: "Special Snowfall",
        image_name: "special_snowfall",
        schema: 166,
    },
    161: {
        name: "Ventum Maris",
        image_name: "ventum_maris",
        schema: 174,
    },
    162: {
        name: "Violent Wintertide",
        image_name: "violent_wintertide",
        schema: 169,
    },
    163: {
        name: "Resonation",
        image_name: "resonation",
        schema: 177,
    },
    164: {
        name: "Aggradation",
        image_name: "aggradation",
        schema: 178,
    },
    165: {
        name: "Lucidation",
        image_name: "lucidation",
        schema: 179,
    },
    166: {
        name: "Stunning",
        image_name: "stunning",
        schema: 180,
    },
    167: {
        name: "Ardentum Saturnalis",
        image_name: "ardentum_saturnalis",
        schema: 181,
    },
    168: {
        name: "Fragrancium Elementalis",
        image_name: "fragrancium_elementalis",
        schema: 182,
    },
    169: {
        name: "Reverium Irregularis",
        image_name: "reverium_irregularis",
        schema: 183,
    },
    170: {
        name: "Perennial Petals",
        image_name: "perennial_petals",
        schema: 185,
    },
    171: {
        name: "Flavorsome Sunset",
        image_name: "flavorsome_sunset",
        schema: 186,
    },
    172: {
        name: "Raspberry Bloom",
        image_name: "raspberry_bloom",
        schema: 187,
    },
    173: {
        name: "Iridescence",
        image_name: "iridescence",
        schema: 188,
    },
    174: {
        name: "Tempered Thorns",
        image_name: "tempered_thorns",
        schema: 189,
    },
    175: {
        name: "Devilish Diablo",
        image_name: "devilish_diablo",
        schema: 190,
    },
    176: {
        name: "Severed Serration",
        image_name: "severed_serration",
        schema: 191,
    },
    177: {
        name: "Shrieking Shades",
        image_name: "shrieking_shades",
        schema: 192,
    },
    178: {
        name: "Restless Wraiths",
        image_name: "restless_wraiths",
        schema: 193,
    },
    179: {
        name: "Infernal Wraith",
        image_name: "infernal_wraith",
        schema: 195,
    },
    180: {
        name: "Phantom Crown",
        image_name: "phantom_crown",
        schema: 196,
    },
    181: {
        name: "Ancient Specter",
        image_name: "ancient_specter",
        schema: 197,
    },
    182: {
        name: "Viridescent Peeper",
        image_name: "viridescent_peeper",
        schema: 198,
    },
    183: {
        name: "Eyes of Molten",
        image_name: "eyes_of_molten",
        schema: 199,
    },
    184: {
        name: "Ominous Stare",
        image_name: "ominous_stare",
        schema: 200,
    },
    185: {
        name: "Pumpkin Moon",
        image_name: "pumpkin_moon",
        schema: 201,
    },
    186: {
        name: "Frantic Spooker",
        image_name: "frantic_spooker",
        schema: 202,
    },
    187: {
        name: "Frightened Poltergeist",
        image_name: "frightened_poltergeist",
        schema: 203,
    },
    188: {
        name: "Energetic Haunter",
        image_name: "energetic_haunter",
        schema: 204,
    },
    189: {
        name: "Smissmas Tree",
        image_name: "smissmas_tree",
        schema: 205,
    },
    190: {
        name: "Hospitable Festivity",
        image_name: "hospitable_festivity",
        schema: 206,
    },
    191: {
        name: "Condescending Embrace",
        image_name: "condescending_embrace",
        schema: 207,
    },
    192: {
        name: "Sparkling Spruce",
        image_name: "sparkling_spruce",
        schema: 209,
    },
    193: {
        name: "Glittering Juniper",
        image_name: "glittering_juniper",
        schema: 210,
    },
    194: {
        name: "Prismatic Pine",
        image_name: "prismatic_pine",
        schema: 211,
    },
    195: {
        name: "Spiraling Lights",
        image_name: "smissmas_swirl",
        schema: 212,
    },
    196: {
        name: "Twisting Lights",
        image_name: "twisting_lights",
        schema: 213,
    },
    197: {
        name: "Stardust Pathway",
        image_name: "stardust_pathway",
        schema: 214,
    },
    198: {
        name: "Flurry Rush",
        image_name: "flurry_rush",
        schema: 215,
    },
    199: {
        name: "Spark of Smissmas",
        image_name: "spark_of_smissmas",
        schema: 216,
    },
    200: {
        name: "Polar Forecast",
        image_name: "polar_forecast",
        schema: 218,
    },
    201: {
        name: "Shining Stag",
        image_name: "shining_stag",
        schema: 219,
    },
    202: {
        name: "Holiday Horns",
        image_name: "holiday_horns",
        schema: 220,
    },
    203: {
        name: "Ardent Antlers",
        image_name: "ardent_antlers",
        schema: 221,
    },
    204: {
        name: "Festive Lights",
        image_name: "festive_lights",
        schema: 223,
    },
    205: {
        name: "Haunted Phantasm",
        image_name: "haunted_phantasm",
        schema: 0,
    },
    206: {
        name: "Ghastly Ghosts",
        image_name: "ghastly_ghosts",
        schema: 0,
    },
};

export default dataEffects;
