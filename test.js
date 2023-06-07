const [M, N] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const primes = [];

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

for (let i = M; i <= N; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}
if (primes.length) {
  console.log(primes.reduce((acc, cur) => (acc += cur), 0));
  console.log(Math.min(...primes));
} else {
  console.log(-1);
}
