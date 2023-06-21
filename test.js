const inputs = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

let N = inputs[0];
let N_cards = new Set(inputs[1].split(" "));
let M = inputs[2];
let M_cards = inputs[3].split(" ");

const answer = [];

for (let M_card of M_cards) {
  N_cards.has(M_card) ? answer.push(1) : answer.push(0);
}

console.log(answer.join(" "));
