import { chunk, getPuzzleInput } from "../utilities/getPuzzleInput";

const dictionary = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Part I
{
  const input = await getPuzzleInput(import.meta.url);
  const rucksacks = input.split("\n").filter(Boolean);
  let total = 0;

  for (const rucksack of rucksacks) {
    const len = rucksack.length;
    const c1 = rucksack.substring(0, len / 2);
    const c2 = rucksack.substring(len / 2);

    for (const letter of c1) {
      if (c2.indexOf(letter) > -1) {
        total += dictionary.indexOf(letter) + 1;
        break;
      }
    }
  }

  console.log(total);
}

// Part II
{
  const input = await getPuzzleInput(import.meta.url);
  const teams: string[][] = chunk(input.split("\n").filter(Boolean), 3);
  let total = 0;

  for (const team of teams) {
    for (const letter of team[0]) {
      if (team[1].includes(letter) && team[2].includes(letter)) {
        total += dictionary.indexOf(letter) + 1;
        break;
      }
    }
  }

  console.log(total);
}
