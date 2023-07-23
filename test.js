let [O, T] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((t) => +t);

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(gcd(O, T));
console.log(lcm(O, T));
