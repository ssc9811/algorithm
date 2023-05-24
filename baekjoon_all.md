# 단계별로 풀어보기

## 입출력과 사칙연산

<blockquote>
<br>

### Hello World

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/bd74ca05-ee01-4a31-84c0-e5cde960f4e8)

```javascript
console.log("Hello World!");
```

<br>

### A+B

<br>

<img width="1043" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/9fb6f7ac-88f8-48ba-a48d-561978e0a035">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a + b);
```

<br>

### A-B

<br>

<img width="1047" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/cf37ad30-c26b-4c6a-a01d-d4ec5661dd3f">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a - b);
```

<br>

### A\*B

<br>

<img width="1045" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/74ad9c05-f5bc-4436-b155-3d6dbd7b77c7">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a / b);
```

<br>

### A/B

<br>

<img width="1042" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/c0684051-27f7-469e-a1e6-ed9b4bb5bdc9">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a * b);
```

<br>

### 사칙연산

<br>

<img width="1038" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f9e43ce1-84f1-4242-bdb0-24508b10730d">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
```

<br>

### ??!

<br>

<img width="1039" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/66da820e-0c45-4c39-8df2-06db07fa72d6">

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(`${input}??!`);
```

<br>

### 1998년생인 내가 태국에서는 2541년생?!

<br>

<img width="1041" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/a5d69966-debb-4656-bf81-ae4062740e92">

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(+input - 543);
```

<br>

### 나머지

<br>

<img width="1041" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/322c5ec2-bece-4494-bd09-92e139f5a329">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);
const [A, B, C] = inputs;

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
```

<br>

### 곱셈

<br>

<img width="1039" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/aa0cc831-c7d3-4cf9-9ab1-b2e4b5feedd3">

```javascript
const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [a, b] = inputs;
console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);
```

<br>

### 꼬마 정민

<br>

<img width="1042" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/261a0064-6e65-40a6-b73f-4869a37aa319">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);
const [a, b, c] = inputs;
console.log(a + b + c);
```

<br>

### 고양이

<br>

<img width="1044" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/696825f5-4bd7-42f4-b2c4-7a9d66dcc090">

```javascript
console.log(`\\    /\\
 )  ( ')
(  /  )
 \\(__)|`);
```

<br>

### 개

<br>

<img width="1040" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/105bdf15-6eff-48c4-afb2-0905f0bbeda3">

```javascript
console.log(`|\\_/|
|q p|   /}
( 0 )"""\\
|"^"\`    |
||_/=\\\\__|`);
```

</blockquote>
