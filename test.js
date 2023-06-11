const input = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim();

console.log(input * 4);
