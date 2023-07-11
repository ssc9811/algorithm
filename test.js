let input = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("");

// 스택 활용해서 풀이
let sticks = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const string = input[i];
  if (string === "(" && input[i + 1] === ")") {
    answer += sticks.length;
    i += 1;
  } else if (string === "(") {
    sticks.push("(");
  } else if (string === ")") {
    sticks.pop();
    answer += 1;
  }
}
console.log(answer);
