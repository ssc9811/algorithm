let inputs = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +inputs[0];
const NCards = new Set(inputs[1].split(" "));
const M = +inputs[2];
const MCards = inputs[3].split(" ");

for (let MCard of MCards) {
  let count = 0;
  NCards.has(MCard) && count++;
  console.log(count);
}
