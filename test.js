const a = 3;
const b = 2;
const n = 20;

// 빈병 a 개 , 콜라 b 병을준다, n 개를 가져다주면 ??

function solution(a, b, n) {
  let answer = 0;
  let remainder = 0;
  while (n >= a) {
    remainder = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += remainder;
  }
  return answer;
}

solution(a, b, n);
