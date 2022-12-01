import { getPuzzleInput } from "../utilities/getPuzzleInput.mjs";

const input = await getPuzzleInput(import.meta.url);

const totalPerElf = input.split("\n\n");
let highestValue = 0;

for (const value of totalPerElf) {
  const currentElfValue = value.split("\n").reduce((prev, next) => prev + Number(next), 0);

  if (currentElfValue > highestValue) {
    highestValue = currentElfValue;
  }
}

console.log(highestValue);
