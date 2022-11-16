const n = 8; // 참가자
const a = 4;
const b = 7;

function solution(n, a, b) {
  let round = 1;
  const nextNumber = (number) => Math.floor((number + 1) / 2);
  while (a !== b) {
    if (nextNumber(a) === nextNumber(b)) break;
    a = nextNumber(a);
    b = nextNumber(b);
    round++;
  }
  console.log(round);
}

solution(n, a, b);
