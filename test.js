let [n, ...strings] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => x.split("")));

const answer = strings.map((string) =>
  string.map((item) => item.reverse().join("")).join(" ")
);

answer.forEach((item) => console.log(item));
