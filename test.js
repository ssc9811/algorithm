let [[n], ...[list]] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" "));

console.log(n, list);

const answer = [];

for (let i = 0; i < n; i++) {
  let num = list.reverse().pop();
  while (true) {
    let j = i + 1;
    let next = list[j];
    if (+num > next) {
      answer.push(-1);
    } else {
      answer.push(max);
    }
    j++;
  }
}

console.log(answer);
