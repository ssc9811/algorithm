const [N, B] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(N, B));
