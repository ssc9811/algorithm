// 소문자, 대문자, 숫자, 공백

const strings = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .split("\n");

let result = "";

for (string of strings) {
  if (string.length === 0) continue;
  const answer = [0, 0, 0, 0];
  const chars = string.split("");
  for (char of chars) {
    if (char === " ") {
      answer[3]++;
    } else if (!isNaN(+char)) {
      answer[2]++;
    } else if (char === char.toUpperCase()) {
      answer[1]++;
    } else if (char === char.toLowerCase()) {
      answer[0]++;
    }
  }
  result += answer.join(" ") + "\n";
}

console.log(result.trim());
