let [M, N] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((t) => +t);

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  answer += `${n}\n`;
};

let answer = "";

for (let i = M; i <= N; i++) {
  isPrime(i);
}

console.log(answer.trim());
