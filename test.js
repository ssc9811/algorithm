const [nums, ...words] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

words.sort((a, b) => {
  return a.length - b.length || a.localeCompare(b);
});

const set = new Set(words);
console.log(Array.from(set).join("\n"));
