import { crateArray } from "./crate";
import unboxCrate from "./crateUnbox";

for (const [index, crate] of Object.entries(crateArray)) {
    console.log(...unboxCrate(parseInt(index)));
}

console.log("Success!");
