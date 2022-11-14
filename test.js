/*
유클리드 호제법

< 최대 공약수 >
if(n < m) 인 경우에, n % m = r 로 표현할 수 있다.
이때 r === 0 일 경우 m 이 '최대 공약수'가 된다.

< 최소 공배수 >
[ n * m / 최대 공약수 ] 를 계산하면 최소 공배수를 구할 수 있다.
*/
const arr = [2, 6, 8, 14];

// const gcd = (a, b) => {
//   while (b > 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// };

solution(arr);
