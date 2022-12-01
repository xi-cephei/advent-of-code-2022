import { input } from "./input.mjs";

const totals = input.split("\n\n");
let highest = 0;

for (const values of totals) {
  const split = values.split("\n").reduce((prev, next) => prev + Number(next), 0);

  if (split > highest) {
    highest = split;
  }
}

console.log(highest);
