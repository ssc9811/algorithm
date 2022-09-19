const num1 = 6;
const num2 = 16;
const num3 = 626331;

let count = 500;

const solution = (num) => {
  let result = num;
  for (let i = 0; i <= 500; i++) {
    if (result % 2 === 0) {
      result = result / 2
    }
    else if (result % 2 === 1 && result > 1) {
      result = (result * 3) + 1
    }
    else if (result === 1) {
      return i
    }
  }
}
solution(num1);