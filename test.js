// 소문자, 대문자, 숫자, 공백

const [A, B, C] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((t) => +t);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
