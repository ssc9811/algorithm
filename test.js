let [[n, m], ...blocks] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => x));

blocks = blocks.map((str) => str.join("").split(""));
const answer = [];
const line = ["WBWBWBWB", "BWBWBWBW"];

for (let x = 0; x <= n - 8; x++) {
  for (let y = 0; y <= m - 8; y++) {
    for (let z = 0; z < 2; z++) {
      let count = 0;

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const current = blocks[x + i][j + y];
          if (current !== line[(i + z) % 2][j]) count++;
        }
      }
      answer.push(count);
    }
  }
}

console.log(Math.min(...answer));
