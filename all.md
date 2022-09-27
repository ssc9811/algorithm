## 1단계 문제

### 1-1 짝수와 홀수

![스크린샷 2022-09-27 오후 7 23 27](https://user-images.githubusercontent.com/39263149/192501641-58739397-f946-417c-9322-5b22c19acf3b.png)

```javascript
function solution(num) {
  var answer = num % 2 == 0 ? "Even" : "Odd";
  return answer;
}
```

### 다른 사람의 풀이

```javascript
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
```

### 배운점

```
나름 짧게 작성했다고 생각했는데, 그냥 한줄로 적은걸 보고 놀랐다.
바로 return하고, 0과 같은지 확인할 필요도 없다.
이유는 공통적으로 여러 프로그래밍 언어에서, 'False = 0' 이고 'True = 1' 혹은 0 이 아닌 경우를 사용하기 때문이다.

홀수 값은 1이 나오므로 true, 짝수는 0이므로 false
```

### 1-2 평균 구하기

![스크린샷 2022-09-27 오후 7 23 44](https://user-images.githubusercontent.com/39263149/192501647-f080c573-7e5d-4ee1-877a-d603d7d6ca33.png)

```javascript
function solution(arr) {
  return arr.reduce((arr, cur) => arr + cur, 0) / arr.length;
}
```
