let [N, K] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split(" ");

const queue = Array.from({ length: N }).map((_, i) => i + 1);
const answer = [];
let count = 1;
while (queue.length) {
  const shiftItem = queue.shift();
  if (count % K === 0) {
    answer.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  count += 1;
}

console.log(`<${answer.join(", ")}>`);
