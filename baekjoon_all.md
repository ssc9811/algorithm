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
<br>
<br>

## 조건문

<blockquote>
<br>

### 두 수 비교하기

<br>

<img width="1036" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/b3da0440-c923-4dc7-bef9-5264c7e035a4">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
```

<br>

### 시험 성적

<br>

<img width="1038" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/9138d2c9-dd4b-4a41-9de6-1351c64c4faa">

```javascript
const score = require("fs").readFileSync("/dev/stdin").toString();

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
```

<br>

### 윤년

<br>

<img width="1036" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/a307ae7d-0019-46e8-be00-4f61147587dc">

```javascript
const year = Number(require("fs").readFileSync("/dev/stdin").toString());

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
```

<br>

### 사분면

<br>

<img width="1037" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/11dba8ca-c539-48cf-a7c8-62fecb4d70fb">

```javascript
const inputs = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const [x, y] = inputs;

if (x > 0) y > 0 ? console.log(1) : console.log(4);
if (x < 0) y > 0 ? console.log(2) : console.log(3);
```

<br>

### 알람 시계

<br>

<img width="1036" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/ccc6bac3-419f-4e85-859c-0ad54c2c579d">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);
let [h, m] = inputs;

m -= 45;

if (m < 0) {
  m += 60;
  h--;
  if (h === -1) {
    h = 23;
  }
}
console.log(h + " " + m);
```

<br>

### 오븐 시계

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/f8afec7d-7387-46c2-92f3-3ab51442b590)

```javascript
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let h = input[0].split(" ")[0];
let m = input[0].split(" ")[1];
let t = input[1];

x(+h, +m, +t);

function x(hh, mm, tt) {
  mm += tt;

  while (mm >= 60) {
    mm -= 60;
    hh += 1;
  }
  while (hh >= 24) {
    hh -= 24;
  }

  console.log(hh, mm);
}
```

<br>

### 주사위 세개

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/f44f7117-93c9-4e33-b200-12ea13b3bcc0)

```javascript
const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split(" ")
  .map((x) => +x);

const [a, b, c] = input;
M = Math.max(...input);

const x = (a, b, c, M) => {
  if (a == b && b == c && a == c) {
    console.log(10000 + a * 1000);
  }
  if (a !== b || a !== c || b !== c) {
    if (a == b || a == c) {
      console.log(1000 + a * 100);
    }
    if (b == c) {
      console.log(1000 + b * 100);
    }
  }
  if (a !== b && a !== c && b !== c) {
    console.log(M * 100);
  }
};
x(a, b, c, M);
```

</blockquote>
