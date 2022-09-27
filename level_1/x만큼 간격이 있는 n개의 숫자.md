![스크린샷 2022-09-27 오후 7 32 02](https://user-images.githubusercontent.com/39263149/192503556-13720381-9dac-40c7-9eee-b5d0507103f5.png)

```javascript
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
```
