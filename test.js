const [x, y, w, h] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const array = [x, w - x, y, h - y];
console.log(Math.min(...array));
