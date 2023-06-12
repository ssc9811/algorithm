let [A, B, C] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((t) => +t)
  .sort((a, b) => a - b);

while (true) {
  if (A + B > C) {
    console.log(A + B + C);
    break;
  } else {
    C = A + B - 1;
  }
}
