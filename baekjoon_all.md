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
<br>
<br>

## 반복문

<blockquote>
<br>

### 구구단

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/359208be-0361-4776-8d1b-eb3bdcf4e2de)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i <= 9; i++) {
  console.log(`${+input} * ${i} = ${+input * i}`);
}
```

<br>

### A+B - 3

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/5ba4bb73-1db5-4d14-b59d-72d61e21b835)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(+numbers[0] + +numbers[1]);
}
```

<br>

### 합

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/efccf253-7f5a-4aa7-9834-69d4022a6e1a)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString();

let answer = 0;
for (let i = 1; i <= input; i++) {
  answer += i;
}

console.log(answer);
```

<br>

### 영수증

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/135fdc88-e7ed-43d0-b3d3-31bc58c12a03)

```javascript
const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let sum = inputs[0];
const count = inputs[1];

for (let i = 1; i <= count; i++) {
  let numbers = inputs[i + 1].split(" ");
  sum -= numbers[0] * numbers[1];
}

sum === 0 ? console.log("Yes") : console.log("No");
```

<br>

### 코딩은 체육과목 입니다

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/dfafe3d9-b25f-4783-9268-ac795b3beb25)
![image](https://github.com/ssc9811/algorithm/assets/39263149/a5bda9f7-2ad0-4658-a406-beed41a74e61)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString();

const n = input / 4;

console.log(`${"long ".repeat(n)}int`);
```

<br>

### 빠른 A+B

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/b4f1149c-6fae-4e1e-8e30-818a865f0033)
![image](https://github.com/ssc9811/algorithm/assets/39263149/c7324457-9905-4368-a032-5c5141480577)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  answer +=
    i === 1
      ? `${Number(numbers[0]) + Number(numbers[1])}`
      : `\n${Number(numbers[0]) + Number(numbers[1])}`;
}

console.log(answer);
```

<br>

### A+B - 7

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/e2dcef21-689f-4465-9c91-6b1326a3bc6a)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(`Case #${i}: ${+numbers[0] + +numbers[1]}`);
}
```

<br>

### A+B - 8

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/bf04e04f-1ac5-4198-aa3b-1017a87a04eb)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(
    `Case #${i}: ${+numbers[0]} + ${+numbers[1]} = ${+numbers[0] + +numbers[1]}`
  );
}
```

<br>

### 별찍기 - 1

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/8e0261de-df68-4619-b07a-a8f67789dc72)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i <= input; i++) {
  console.log("*".repeat(i));
}
```

<br>

### 별찍기 - 2

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/8ccdcc6a-9d8e-4ac6-bf36-26867b37269f)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString();

for (let i = 1; i <= input; i++) {
  console.log("*".repeat(i).padStart(input));
}
```

<br>

### A+B - 5

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/010aa0b3-885a-40ed-9752-53ff5c5a06da)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputs.length - 1; i++) {
  const numbers = inputs[i].split(" ");
  console.log(+numbers[0] + +numbers[1]);
}
```

<br>

### A+B - 4

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/9c9b8bd6-7e7f-425e-af9a-5dbd52fcef2d)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputs.length; i++) {
  const numbers = inputs[i].split(" ");
  console.log(+numbers[0] + +numbers[1]);
}
```

</blockquote>

<br>
<br>

## 1차원 배열

<blockquote>
<br>

### 개수 세기

<br>

<img width="1039" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/cae2957a-3874-4024-8405-aea547e4646d">

```javascript
const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
console.log(inputs[1].split(" ").filter((item) => item === inputs[2]).length);
```

<br>

### X보다 작은 수

<br>

<img width="1040" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/46281c78-1776-4e01-a7d5-19b653bfcea3">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, item] = inputs;
const max = n.split(" ")[1];
console.log(
  item
    .split(" ")
    .filter((item) => +item < +max)
    .join(" ")
);
```

<br>

### 최소, 최대

<br>

<img width="1037" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/50727a1f-652e-41ed-8092-36e9ba6a77e2">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = inputs[1].split(" ").map((v) => +v);
console.log(Math.min(Math.min(...arr)), Math.max(Math.max(...arr)));
```

<br>

### 최댓값

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/8eca0031-bf88-48b7-b7cd-fbf0aa21c1b8)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

let max = inputs[0];
let index = 0;
for (let i = 0; i < inputs.length; i++) {
  if (max < inputs[i]) {
    max = inputs[i];
    index = i;
  }
}

console.log(max);
console.log(index + 1);
```

<br>

### 공 넣기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/b24d76cf-2414-4594-8201-8ab0fac71043)

```javascript
const [[n, m], ...example] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((v) => +v));

let baskets = new Array(n).fill(0);
for (let [i, j, ball] of example) {
  for (let x = i; x <= j; x++) {
    baskets[x - 1] = ball;
  }
}

console.log(baskets.join(" "));
```

<br>

### 공 바꾸기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/71108439-177a-4f26-a75f-240d09991914)

```javascript
const [[n, m], ...example] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((v) => +v));

let basket = [];

for (let i = 1; i <= n; i++) {
  basket.push(i);
}

example.forEach((item) => {
  const [i, j] = item;
  let temp = basket[i - 1];
  basket[i - 1] = basket[j - 1];
  basket[j - 1] = temp;
});

console.log(basket.join(" "));
```

<br>

### 과제 안 내신 분..?

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/1bbb2a92-5159-484a-a885-64d960809bd1)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const answer = [];

for (let i = 1; i < 31; i++) {
  if (!inputs.includes(i)) {
    answer.push(i);
  }
}
console.log(Math.min(...answer));
console.log(Math.max(...answer));
```

<br>

### 나머지

<br>

<img width="1032" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/883ed5be-3f67-4bbf-8484-846002fbb137">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

const answer = [];

inputs.map((item) => answer.push(item % 42));

console.log(new Set(answer).size);
```

---

<br>

### 평균

<br>

<img width="1032" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/455a398b-d77a-4fa5-8b25-f8e330513d27">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const scores = inputs[1].split(" ");
const max = Math.max(...scores);
console.log(
  scores.reduce((acc, cur) => (acc += (cur / max) * 100), 0) / inputs[0]
);
```

</blockquote>

<br>
<br>

## 문자열

<blockquote>
<br>

### 문자와 문자열

<br>

<img width="1043" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f36ad5e6-c703-457b-a7ab-81f3214a5520">

```javascript
const [word, order] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");
console.log(word[order - 1]);
```

<br>

### 단어 길이 재기

<br>

<img width="1039" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f85fbad1-72b6-4c31-8429-88ce56605c39">

```javascript
const word = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(word.length);
```

<br>

### 문자열

<br>

<img width="1034" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/bd323300-8aad-4221-ad4d-2a8bb3b50693">

```javascript
const [count, ...strings] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

strings.forEach((string) => console.log(string[0] + string[string.length - 1]));
```

<br>

### 아스키 코드

<br>

<img width="1035" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/267eb168-3bdf-418a-895c-5f1d20735193">

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input.charCodeAt(0));
```

<br>

### 숫자의 합

<br>

<img width="1034" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f0cd693e-67ba-43b1-9201-94532a694407">

```javascript
const [count, string] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(string.split("").reduce((acc, cur) => (acc += +cur), 0));
```

<br>

### 알파벳 찾기

<br>

<img width="1043" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/b7402944-848c-4d0d-bd18-446168c8bd04">

```javascript
const word = require("fs").readFileSync("/dev/stdin").toString().trim();

const alphabetArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);

let answer = "";
for (let alphabet of alphabetArray) {
  answer += `${word.indexOf(alphabet)} `;
}
console.log(answer);
```

### 수정

```javascript
const word = require("fs").readFileSync("/dev/stdin").toString().trim();

const alphabetArray = Array.from({ length: 26 }, (_, i) =>
  word.indexOf(String.fromCharCode(97 + i))
);

console.log(alphabetArray.join(" "));
```

<br>

### 문자열 반복

<br>

<img width="1033" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/eac69d8b-4c5d-4f65-b73a-6b529cd84b87">

```javascript
const [T, ...RnT] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

RnT.forEach((item) => {
  const [R, T] = item.split(" ");
  let answer = "";
  for (let t in T) {
    answer += T[t].repeat(R);
  }
  console.log(answer);
});
```

<br>

### 단어의 개수

<br>

<img width="1037" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f6fb3c1c-ffb4-455c-9088-183eaf2eb8fe">

```javascript
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

console.log(input[0] === "" ? 0 : input.length);
```

<br>

### 상수

<br>

<img width="1037" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/ca563531-6e14-4a15-a067-a04c710cf55a">

```javascript
const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const A = a.split("").reverse().join("");
const B = b.split("").reverse().join("");

console.log(A > B ? A : B);
```

### 수정

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((input) => input.split("").reverse().join("") * 1);

console.log(Math.max(...inputs));
```

<br>

### 다이얼

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/37268956-d7f8-4f61-b972-a6006a58d499)
![image](https://github.com/ssc9811/algorithm/assets/39263149/9be49f87-63e3-44ba-9708-eacc319f9059)

```javascript
const [...inputs] = require("fs").readFileSync("/dev/stdin").toString().trim();

const dial = {
  A: 2,
  B: 2,
  C: 2,
  D: 3,
  E: 3,
  F: 3,
  G: 4,
  H: 4,
  I: 4,
  J: 5,
  K: 5,
  L: 5,
  M: 6,
  N: 6,
  O: 6,
  P: 7,
  Q: 7,
  R: 7,
  S: 7,
  T: 8,
  U: 8,
  V: 8,
  W: 9,
  X: 9,
  Y: 9,
  Z: 9,
};
let answer = 0;
for (let char of inputs) {
  answer += dial[char] + 1;
}

console.log(answer);
```

<br>

### 그대로 출력하기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/782227d2-a40f-48dd-b740-dd7ff29f4b59)

```javascript
const inputs = require("fs").readFileSync("/dev/stdin").toString();
console.log(inputs);
```

</blockquote>
