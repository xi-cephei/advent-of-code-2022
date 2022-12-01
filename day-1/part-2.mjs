import { readFile } from "fs/promises";

const input = await readFile("day-1/input.txt", "utf-8");

/**
 * @param value {string}
 * @returns number
 */
const splitAndCountUp = (value) => {
  return value.split("\n").reduce((prev, next) => prev + Number(next), 0);
};

const totalPerElf = input.split("\n\n");

const sumOfFirstThreeElves = totalPerElf
  .map(splitAndCountUp)
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((prev, next) => prev + next, 0);

console.log(sumOfFirstThreeElves);
