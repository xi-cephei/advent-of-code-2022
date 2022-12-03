import { getPuzzleInput } from "../utilities/getPuzzleInput";

const scores = new Map([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["X", 1],
  ["Y", 2],
  ["Z", 3]
]);

const inputToGames = (input: string): string[][] =>
  input
    .split("\n")
    .filter(Boolean)
    .map((game) => game.split(" "));

// Part I
{
  const input = await getPuzzleInput(import.meta.url);
  const games = inputToGames(input);

  let score = 0;

  const play = (opponent: string, me: string) => {
    const myScore = scores.get(me) as number;

    if (scores.get(opponent) === myScore) {
      return 3 + myScore;
    }

    if ((me === "X" && opponent === "C") || (me === "Z" && opponent === "B") || (me === "Y" && opponent === "A")) {
      return 6 + myScore;
    }

    // lose
    return myScore;
  };

  for (const [opponent, me] of games) {
    score += play(opponent, me);
  }

  console.log(score);
}

// Part II
{
  const input = await getPuzzleInput(import.meta.url);
  const games = inputToGames(input);

  const moves: Record<string, [string, string]> = {
    A: ["Y", "Z"],
    B: ["Z", "X"],
    C: ["X", "Y"]
  };

  const play = (opponent: string, me: string): number => {
    // Draw
    if (me === "Y") {
      return 3 + scores.get(opponent)!;
    }

    return me === "X" ? scores.get(moves[opponent][1])! : scores.get(moves[opponent][0])! + 6;
  };

  let score = 0;

  for (const [opponent, me] of games) {
    score += play(opponent, me);
  }

  console.log(score);
}
