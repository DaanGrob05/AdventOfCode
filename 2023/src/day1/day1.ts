import * as fs from "fs";

const lines = fs.readFileSync("./input.txt", "utf-8").split("\n");

const extractNumbers = (text: string) => {
  return text.replace(/[^0-9]/g, "");
};

const getCalibrationValue = (text: string): number => {
  if (text.length === 1) return +(text + text);

  return +(text.charAt(0) + text.slice(-1));
};

let total = 0;

lines.forEach((line) => {
  total += getCalibrationValue(extractNumbers(line));
});

console.log(total);
