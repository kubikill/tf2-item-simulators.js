import { Item } from "./crate";

// Unusual cosmetics pool
export const sharedUnusualPool = [
  5, 6, 13, 14, 21, 22, 23, 28, 29, 30, 34, 35, 36, 43, 44, 45, 46, 47, 48, 49,
  51, 52, 54, 55, 56, 57, 58, 63, 64, 65, 71, 72, 73, 111, 117, 118, 122, 123,
  130, 131, 133, 134, 135, 136, 137, 140, 142, 143, 147, 148, 152, 153, 157,
  160, 166, 167, 172, 177, 182, 183, 187, 188, 197, 198, 204, 210, 211, 225,
  230, 235, 240, 245, 246, 250, 260, 265, 266, 275, 281, 289, 290, 292, 294,
  301, 303, 305, 308, 316, 317, 327, 341, 342, 343, 358, 359, 362, 366, 370,
  375, 376, 383, 387, 388, 389, 390, 392, 393, 394, 395, 397, 399, 400, 401,
  402, 405, 407, 408, 409, 411, 413, 414, 415, 417, 418, 420, 422, 423, 425,
  427, 430, 431, 432, 433, 434, 435, 436, 438, 439, 440, 441, 454, 455, 457,
  459, 460, 464, 465, 467, 470, 471, 472, 475, 479, 480, 481, 482, 483, 487,
  488, 490, 492, 496, 501, 503, 504, 506, 510, 512, 516, 524, 525, 526, 537,
  538, 541, 547, 549, 552, 553, 666, 685, 689, 691, 692, 693, 694, 696, 704,
  705, 710, 712, 715, 718, 720, 725, 727, 732, 733, 739, 746, 749, 754, 755,
  756, 777, 779, 784, 785, 786, 791, 792, 793, 794, 798, 804, 812, 815, 818,
  893, 902, 905, 906, 907, 908, 909, 913, 929, 932, 933, 936, 939, 941, 942,
  943, 945, 949, 953, 964, 1355, 1357, 1358, 1360, 1361, 1362, 1363, 1364, 1365,
  1366, 1367, 1368, 1369, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379,
  1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392,
  1393, 1394, 1395, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406,
  1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419,
  1420, 1421,
];
// Unusual effect containers

export const unusualEffectGroups = {
  generation1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  generation2: [28, 29, 30, 31, 32, 33, 34, 35],
  generation3: [55, 56, 57, 58, 59, 60, 61],
  get allGenerations() {
    return this.generation1.concat(this.generation2, this.generation3);
  },
  taunt: [15, 16, 17, 18, 19, 20, 21, 22, 23],
  legacyWeapon: [24, 25, 26, 27],
  weapon: [24, 25, 26],
  robocrate: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  endOfTheLine: [76, 77, 78, 79],
  invasion: [80, 81, 82, 83, 84, 85, 86, 87, 88],
  get summer20() {
    return this.allGenerations.concat([
      134, 135, 136, 137, 138, 139, 140, 141, 142,
    ]);
  },
  get summer21() {
    return this.allGenerations.concat([
      163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173,
    ]);
  },
  halloween11: [36, 37, 38, 39],
  halloween12: [40, 41, 42, 43, 44],
  halloween13: [62, 63, 64, 65, 66, 67, 68, 69],
  halloween14: [70, 71, 72, 73, 74, 75],
  halloween14Taunt: [205, 206],
  halloween15: [89, 90, 91, 92, 93, 94, 95],
  halloween16: [96, 97, 98, 99],
  get halloween17() {
    return this.halloween11.concat(
      this.halloween12,
      this.halloween13,
      this.halloween14,
      this.halloween15,
      this.halloween16
    );
  },
  halloween18: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110],
  halloween19: [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122],
  halloween20: [143, 144, 145, 146, 147, 148, 149, 150],
  halloween21: [
    174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
  ],
  smissmas19: [123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133],
  smissmas20: [151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162],
  smissmas21: [
    189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203,
    204,
  ],
};

// Global bonus item list
export const globalBonusItemArray = [
  24,
  7,
  74,
  762,
  763,
  "paint",
  "strange_part",
  15,
  767,
  768,
  769,
];
// List of taunts used for unusualifiers
export const unusualifierArray = [
  75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 149, 920, 973,
  974, 1033, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621,
  1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634,
  1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1699,
  1700, 1701, 1702, 1703, 1704, 1705, 1706, 1763, 1764, 1765, 1766, 1767, 1788,
  1789, 1790,
];
// List of paints used for bonus items
export const paintBonusArray = [
  8, 9, 16, 17, 37, 66, 105, 106, 107, 108, 109, 110, 112, 113, 114, 119, 125,
  126, 127, 248, 249, 771, 820, 821, 822, 823, 824, 825, 826,
];
// List of strange parts used for bonus items
export const strangePartBonusArray = [
  256, 257, 258, 262, 263, 264, 269, 270, 272, 273, 274, 278, 279, 280, 298,
  299, 300, 313, 314, 315, 367, 368, 369, 373, 374, 380, 381, 382, 446, 447,
  453, 529, 530, 658, 659, 660, 663, 664, 665, 669, 670, 671, 760, 761, 833,
  834, 961, 962, 963,
];
// List of Unlocked Creepy Crate bonus items
export const creepyCrateBonusArray = [
  new Item({ id: 1653, type: "strangifier" }),
  new Item({ id: 1654, type: "strangifier" }),
  new Item({ id: 1652, type: "strangifier" }),
  new Item({ id: 1655, type: "strangifier" }),
  new Item({ id: 1656, type: "strangifier" }),
  new Item({ id: 1657, type: "strangifier" }),
  new Item({ id: 1658, type: "strangifier" }),
  new Item({ id: 1659, type: "strangifier" }),
  new Item({ id: 1660, type: "strangifier" }),
  new Item({ id: 1661, type: "strangifier" }),
  new Item({ id: 1662, type: "strangifier" }),
  new Item({ id: 1663, type: "strangifier" }),
  new Item({ id: 1664, type: "strangifier" }),
  new Item({ id: 1653, type: "killstreak_kit" }),
  new Item({ id: 1652, type: "killstreak_kit" }),
];
// Steam Market item whitelist
export const steamMarketWhitelist = [
  772, 773, 774, 775, 318, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
  345, 346, 347, 348, 349, 350, 351, 352, 353, 673, 674, 675, 676, 677, 678,
  679, 680, 681, 922, 923, 924, 925, 926, 927, 928,
];
// List of crates affected by specific Halloween events
export const halloweenModeCrateList = {
  hw11: null,
  hw12: null,
  hw13: null,
  hw14: null,
  hw15: null,
  hw16: null,
  hw17: null,
  hw18: null,
  hw19: null,
  hw20: null,
  hw21: null,
  xmas19: null,
  xmas20: null,
  xmas21: null,
};
halloweenModeCrateList.hw11 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
halloweenModeCrateList.hw12 = halloweenModeCrateList.hw11.concat([
  32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
]);
halloweenModeCrateList.hw13 = halloweenModeCrateList.hw12.concat([
  49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
  69, 70, 71,
]);
halloweenModeCrateList.hw14 = halloweenModeCrateList.hw13.concat([
  73, 74, 75, 76, 77, 78, 79, 80, 83, 84, 85, 86,
]);
halloweenModeCrateList.hw16 = halloweenModeCrateList.hw14.concat([
  96, 97, 98, 99, 100, 101, 104, 105, 106, 107, 110, 111, 112, 113, 114, 115,
  116, 117, 118, 119, 120, 121, 122,
]);
halloweenModeCrateList.hw17 = [
  104, 105, 106, 107, 110, 111, 123, 124, 125, 126, 127,
];
halloweenModeCrateList.hw18 = halloweenModeCrateList.hw17.concat([132, 134]);
halloweenModeCrateList.hw19 = halloweenModeCrateList.hw18.concat([
  135, 137, 138,
]);
halloweenModeCrateList.xmas19 = halloweenModeCrateList.hw19.concat([139]);
halloweenModeCrateList.hw20 = halloweenModeCrateList.xmas19.concat([140, 142]);
halloweenModeCrateList.xmas20 = halloweenModeCrateList.hw20.concat([143]);
halloweenModeCrateList.hw21 = halloweenModeCrateList.xmas20.concat([145, 147]);
halloweenModeCrateList.xmas21 = halloweenModeCrateList.hw21.concat([148]);
