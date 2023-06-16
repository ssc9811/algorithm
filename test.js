let [a, b, c, d, e, f] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((t) => +t);

for (let i = -999; i <= 999; i++) {
  for (let j = -999; j <= 999; j++) {
    if (a * i + b * j == c && d * i + e * j == f) {
      console.log(i, j);
      break;
    }
  }
}
