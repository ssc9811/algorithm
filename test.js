const n = 15;

function solution(n) {
  let answer = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      if (sum === n) {
        answer++;
        sum = 0;
        break;
      } else if (sum > n) {
        sum = 0;
        break;
      }
      sum += j;
    }
  }
  console.log("answer", answer + 1);
}

solution(n);
