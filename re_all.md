# 1단계 문제

<br>

## 1-1 평균구하기

<img width="453" alt="image" src="https://user-images.githubusercontent.com/39263149/225641136-7075be2b-66bf-40fc-b42f-ff5d4e05fd7a.png">

```javascript
function solution(arr) {
  return arr.reduce((pre, acc) => (pre += acc)) / arr.length;
}
```

## 1-2 짝수와 홀수

![image](https://user-images.githubusercontent.com/39263149/226169419-45a2c304-9600-4efe-ad49-ec0f31b21a28.png)

```javascript
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}
```

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

## 1-5 자연수 뒤집어 배열로 만들기

<img width="542" alt="image" src="https://user-images.githubusercontent.com/39263149/226624951-801fb1ea-4495-459b-ba0e-669a54430784.png">

```javascript
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((n) => +n);
}
```

### 1-6 문자열 내 p와 y의 개수

<img width="575" alt="image" src="https://user-images.githubusercontent.com/39263149/226887676-637f58a1-6a3b-466d-ba49-24f3a304e450.png">

```javascript
function solution(string) {
  const PArray = [];
  const YArray = [];
  string
    .split("")
    .map((word) => word.toUpperCase())
    .filter((filterWord) => {
      if (filterWord === "P") {
        PArray.push(filterWord);
      } else if (filterWord === "Y") {
        YArray.push(filterWord);
      }
    });

  return PArray.length === YArray.length;
}
```

### 1-7 나머지가 1이 되는 수 찾기

![image](https://user-images.githubusercontent.com/39263149/227159136-ca4df0fb-79ed-4d78-81d5-792b4604de32.png)

```javascript
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
```

### 1-8 정수 내림차순으로 배치하기

<img width="572" alt="image" src="https://user-images.githubusercontent.com/39263149/227584810-4efe3e0a-2957-43a3-be91-6ea55bdc61b0.png">

```javascript
function solution(number) {
  return +String(number)
    .split("")
    .map((n) => +n)
    .sort((a, b) => b - a)
    .join("");
}
```

### 숫자풀이 (더 빠름)

```javascript
function solution(n) {
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join("") * 1;
}
```
