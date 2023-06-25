const [[n], ...members] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

members.sort((a, b) => {
  return a.split(" ")[0] - b.split(" ")[0];
});

console.log(members.join("\n"));
