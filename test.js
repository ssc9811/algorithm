let [[n, m], ...lists] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" "));

const pokemonToNum = new Map();
lists = lists.map((list) => list.join());
const option = lists.slice(n, lists.length);
for (let i = 0; i < n; i++) {
  pokemonToNum.set(lists[i], i + 1);
}

let answer = "";

option.forEach((item) => {
  if (isNaN(+item)) {
    answer += `${pokemonToNum.get(item)}\n`;
  } else {
    answer += `${lists[item - 1]}\n`;
  }
});

console.log(answer.trim());
