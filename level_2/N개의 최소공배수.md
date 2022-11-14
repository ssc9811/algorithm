![스크린샷 2022-11-14 오후 2 40 51](https://user-images.githubusercontent.com/39263149/201583963-5ef92bd4-d069-4e25-9bbe-fd71ac0c8c40.png)

```javascript
function solution(arr) {
  arr.sort((a, b) => a - b);
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  let answer = arr[0];
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  return answer;
}
```

### 다른 사람 풀이

```javascript
function nlcm(num) {
  return num.reduce((a, b) => (a * b) / gcd(a, b));
}

function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}
```
