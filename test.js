let [[N], ...words] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];
for (let word of words) {
  arr.push(word);
}

const newArray = [...new Set(arr)];

const arr2 = [];
for (let word of newArray) {
  arr2.push([word.length, word]);
}

arr2.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  else return a[1] - b[1];
});

console.log("arr2", arr2);
