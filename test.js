let [[n], ...nums] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => +x));

const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

for (num of nums) {
  const [A, B] = num;
  console.log(lcm(A, B));
}

// const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
// const lcm = (a, b) => (a * b) / gcd(a, b);

// console.log(gcd(O, T));
// console.log(lcm(O, T));
