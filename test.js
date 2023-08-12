const [N, B] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(N.toString(B).toUpperCase());
