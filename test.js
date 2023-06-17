let [...nums] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => +t);

nums.sort((a, b) => a - b);

console.log(nums.reduce((acc, cur) => (acc += cur)) / nums.length);
console.log(nums[Math.floor(nums.length / 2)]);
