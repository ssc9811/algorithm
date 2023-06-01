const gradeObj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
  P: 0.0,
};

let input = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

let s = 0;
let t = 0;

for (let [a, b, c] of input) {
  if (c === "P") continue;
  s += b * 1;
  t += b * gradeObj[c];
}

console.log((t / s).toFixed(6));
