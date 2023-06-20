let [[...f], [c], [n0]] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => Math.abs(+x)));

f[0] * n0 + f[1] <= c * n0 && f[0] <= c ? console.log(1) : console.log(0);
