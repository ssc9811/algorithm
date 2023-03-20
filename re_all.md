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

## 1-3 약수의 합

![image](https://user-images.githubusercontent.com/39263149/226169757-e7521029-6cea-4310-80d2-95a2eb3782c3.png)

```javascript
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
```

<hr />

## 1-4 자릿수 더하기

![image](https://user-images.githubusercontent.com/39263149/226170609-d7ff2e51-c86f-4b38-9762-29aa6c833bd1.png)

```javascript
function solution(n) {
  let answer = 0;
  String(n)
    .split("")
    .map((number) => (answer += +number));
  return answer;
}
```

<hr />

## 1-5 x만큼 간격이 있는 n개의 숫자

![image](https://user-images.githubusercontent.com/39263149/226282425-8d3bd6df-fbf0-483a-a555-3a82933acc9a.png)

```javascript
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
```
