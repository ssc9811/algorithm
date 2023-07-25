let [[n], [...primes]] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => +x));

let answer = 0;
function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  answer += 1;
}
for (let prime of primes) {
  isPrime(prime);
}
