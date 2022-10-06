const n1 = 4
const m1 = 8

console.log(2 % n1)
console.log(2 % m1)

const getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
}

let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if ((lcm % num1 == 0) && (lcm % num2 == 0)) {
      break;
    }
    lcm++;
  }
  return lcm
}

function solution(num1, num2) {
  const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
  const lcm = (a, b) => a * b / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}

console.log(getGCD(n1, m1))
console.log(getLCM(n1, m1))
console.log(solution(n1, m1))

