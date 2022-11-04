const n = 5;
function solution(n) {
  const fibonacciArr = new Array(n + 1).fill(0);
  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;
  let answer = 0;
  for (let i = 2; i < fibonacciArr.length; i++) {
    answer = fibonacciArr[i] =
      (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
  }

  return answer;
}
solution(n);

// function fibonacci1234567(n){ //재귀적으로 하면 시간초과
//   let fiboArr = new Array(n+1).fill(0)
//   fiboArr[0] = 0
//   fiboArr[1] = 1
//   for(let i=2; i<=n; i++) fiboArr[i] = (fiboArr[i-1] + fiboArr[i-2])%1234567 //1234567로 나눈 나머지로 하지 않으면 정수범위 초과
//   return fiboArr[n]
// }

function solution(n) {
  const fibonacciArr = new Array(n + 1).fill(0);
  fibonacciArr[0] = 0;
  fibonacciArr[1] = 1;
  let answer = 0;
  for (let i = 2; i < fibonacciArr.length; i++) {
    answer = fibonacciArr[i] =
      (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
  }

  return answer;
}
