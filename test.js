const [nums, ...words] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
const [n, m] = nums.split(" ").map((t) => +t);

const firstWord = new Set(words.slice(0, n));

for (lastWord of words.slice(-m)) {
  firstWord.has(lastWord) && answer++;
}

console.log(answer);
