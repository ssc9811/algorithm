let N = require("fs").readFileSync("./baekjoon_input.txt").toString().trim();

let answer = 0;
let Num = N;

while (Num >= 1) {
  let divSum = String(Num)
    .split("")
    .reduce((acc, cur) => (acc += +cur), 0);
  let sum = divSum + +Num;
  if (sum === +N) {
    answer = Num;
  }
  Num--;
}

console.log(answer);
