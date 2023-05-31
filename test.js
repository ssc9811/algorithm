let input = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let x of arr) {
  input = input.replace(new RegExp(x, "g"), " ");
}

console.log(input.length);
