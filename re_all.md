# 1단계 문제

<br>

## 1-1 평균구하기

<br>

<img width="453" alt="image" src="https://user-images.githubusercontent.com/39263149/225641136-7075be2b-66bf-40fc-b42f-ff5d4e05fd7a.png">

```javascript
function solution(arr) {
  return arr.reduce((pre, acc) => (pre += acc)) / arr.length;
}
```

<br>

## 1-2 짝수와 홀수

<br>

![image](https://user-images.githubusercontent.com/39263149/226169419-45a2c304-9600-4efe-ad49-ec0f31b21a28.png)

```javascript
function solution(num) {
  return num % 2 ? "Odd" : "Even";
}
```

<br>

## 1-3 약수의 합

<br>
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

<br>

## 1-4 자릿수 더하기

<br>

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

<br>

## 1-5 x만큼 간격이 있는 n개의 숫자

<br>

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

<br>

## 1-6 자연수 뒤집어 배열로 만들기

<br>

<img width="542" alt="image" src="https://user-images.githubusercontent.com/39263149/226624951-801fb1ea-4495-459b-ba0e-669a54430784.png">

```javascript
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((n) => +n);
}
```

<br>

### 1-7 문자열 내 p와 y의 개수

<br>

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

<br>

### 1-8 나머지가 1이 되는 수 찾기

<br>

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

<br>

### 1-9 정수 내림차순으로 배치하기

<br>

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

<br>

### 1-10 문자열을 정수로 바꾸기

<br>

<img width="503" alt="image" src="https://user-images.githubusercontent.com/39263149/227694871-b1c39ff8-79a1-49db-b5b8-8c8aed33848a.png">

```javascript
function solution(string) {
  return +string;
}
```

<br>

### 1-11 하샤드 수

<br>

<img width="577" alt="image" src="https://user-images.githubusercontent.com/39263149/227757789-466058dd-121f-44da-a442-bd6d5e4123b5.png">

```javascript
function solution(x) {
  return !(
    x %
    String(x)
      .split("")
      .reduce((acc, cur) => (acc += +cur), 0)
  );
}
```

<br>

### 1-12 두 정수 사이의 합

<br>

<img width="554" alt="image" src="https://user-images.githubusercontent.com/39263149/227911673-5818badc-0934-45be-bf4c-92e20ac4d98b.png">

```javascript
function solution(a, b) {
  let answer = 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}
```

<br>

### 1-13 정수 제곱근 판별

<br>

![image](https://user-images.githubusercontent.com/39263149/228220698-750c9b3d-c445-4a12-a4ea-c680392b4654.png)

```javascript
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
```

<br>

### 1-14 콜라츠 추측

<br>

<img width="572" alt="image" src="https://user-images.githubusercontent.com/39263149/228551575-a6443f0d-5e70-4edc-b316-0a16d5ce5f2c.png">

```javascript
function solution(num) {
  if (num === 1) {
    return 0;
  }
  let cnt = 0;
  while (num > 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    cnt++;
  }
  return cnt > 500 ? -1 : cnt;
}
```

<br>

### 1-15 서울에서 김서방 찾기

<br>

<img width="566" alt="image" src="https://user-images.githubusercontent.com/39263149/228825100-fc554249-8b34-4bab-a076-38fda44d24fa.png">

```javascript
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

function solution(seoul) {
  return `김서방은 ${seoul.findIndex(
    (value) => value === "Kim" && value
  )}에 있다`;
}
```
