# 1단계 문제

<br>

## 1-1 평균구하기

<img width="453" alt="image" src="https://user-images.githubusercontent.com/39263149/225641136-7075be2b-66bf-40fc-b42f-ff5d4e05fd7a.png">

```javascript
function solution(arr) {
  return arr.reduce((pre, acc) => (pre += acc)) / arr.length;
}
```

<hr />

## 1-2 짝수와 홀수

![image](https://user-images.githubusercontent.com/39263149/226169419-45a2c304-9600-4efe-ad49-ec0f31b21a28.png)

```javascript
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}
```

<hr />
