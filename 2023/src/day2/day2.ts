import * as fs from "fs";

const games = fs.readFileSync("./input.txt", "utf-8").split("\n");

const isPossible = (game: string) => {
  const maxRed = 12;
  const maxGreen = 13;
  const maxBlue = 14;
  const regexPattern = /(\d+) (red|blue|green)/g;

  let isPossible = true;
  let match;
  while ((match = regexPattern.exec(game)) !== null && isPossible) {
    const number = parseInt(match[1]);
    const color = match[2];

    isPossible =
      (color === "green" && number <= maxGreen) ||
      (color === "blue" && number <= maxBlue) ||
      (color === "red" && number <= maxRed);
  }

  return isPossible;
};

const getID = (game: string) => {
  const beforeID = game.search(" ");
  const afterID = game.search(":");

  return +game.substring(beforeID, afterID);
};

let total = 0;

games.forEach((game) => {
  if (isPossible(game)) total += getID(game);
});

console.log(total);
