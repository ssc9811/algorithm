const input = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => +t));

let x = 0;
let y = 0;

for (let i of input) {
  const [a, b] = i;
  x ^= a;
  y ^= b;
}
console.log(x, y);
