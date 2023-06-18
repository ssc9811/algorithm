// const fs = require("fs");
// const input = fs
//   .readFileSync("./baekjoon_input.txt")
//   .toString()
//   .trim()
//   .split("\n");

// const N = Number(input.shift());
// const xy = input.filter((v, i) => i >= 0).map((v) => v.split(" "));

let [[N], ...nums] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => +x));

let answer = "";

nums
  .sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  .forEach((num) => {
    answer += `${num[0]} ${num[1]} \n`;
  });

console.log(answer.trim());
