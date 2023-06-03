const [n, ...lists] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => +t));

const arr = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0;

for (let i = 0; i < n; i++) {
  const [startX, startY] = lists[i];
  for (let w = 0; w < 10; w++) {
    for (let h = 0; h < 10; h++) {
      if (arr[startX + w][startY + h] !== 0) {
        continue;
      } else {
        arr[startX + w][startY + h] = 1;
        answer++;
      }
    }
  }
}
console.log(answer);
