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

<br>
<br>

## 심화 1

<blockquote>

<br>

### 새싹

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/0cd4056e-60e3-4e88-88d9-a2064d96c06d)

```javascript
console.log(`         ,r'"7
r\`-_   ,'  ,/
 \\. ". L_r'
   \`~\\/
      |
      |`);
```

<br>

### 킹, 퀸, 룩, 비숍, 나이트, 폰

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/28924d70-cf2b-448a-af50-dea4472eda6f)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const count = [1, 1, 2, 2, 2, 8];

console.log(count.map((item, index) => item - inputs[index]).join(" "));
```

<br>

### 별 찍기 - 7

<br>

<img width="1041" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/8881efb7-6092-4395-9574-b4e4a2379cec">

### 출력 오류 - vscode에선 답으로 나온다

```javascript
const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

for (let i = n - 1; i >= 0; i--) {
  let top = `${" ".repeat(i)}${"*".repeat(n - i + (n - i - 1))}${" ".repeat(
    i
  )}`;
  console.log(top);
}
for (let i = 1; i <= n - 1; i++) {
  let bottom = `${" ".repeat(i)}${"*".repeat(n - i + (n - i - 1))}${" ".repeat(
    i
  )}`;
  console.log(bottom);
}
```

```javascript
const N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

for (let i = 1; i < N; i++) {
  let blank = " ".repeat(N - i);
  let stars = "*".repeat(i + (i - 1));
  console.log(blank + stars);
}

for (let j = N; j > 0; j--) {
  let blank = " ".repeat(N - j);
  let stars = "*".repeat(j + (j - 1));
  console.log(blank + stars);
}
```

<br>

### 팰린드롬인지 확인하기

<br>

<img width="1039" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/414aef24-da58-4424-831b-eccfbf17e5b6">

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

console.log(input.split("").reverse().join("") === input ? 1 : 0);
```

<br>

### 단어 공부

<br>

<img width="1056" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/aebe9a5c-9c2a-4603-a36e-c7bc9a809a9d">

```javascript
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .toLowerCase()
  .trim()
  .split("")
  .sort();

const obj = {};

input.forEach((item) => {
  if (obj[item]) {
    obj[item] += 1;
  } else {
    obj[item] = 1;
  }
});

const maxCount = Math.max(...Object.values(obj));
console.log(
  Object.values(obj).filter((item) => item === maxCount).length > 1
    ? "?"
    : Object.keys(obj)
        .find((key) => obj[key] === maxCount)
        .toUpperCase()
);
```

<br>

### 평균은 넘겠지

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/8ee5178e-cd81-4b37-a825-88c9dbf80bf4)

```javascript
const [[n], ...lists] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

lists.forEach((list) => {
  const [t, ...scores] = list;
  let sum = scores.reduce((acc, cur) => (acc += cur), 0);
  console.log(
    ((scores.filter((score) => score > sum / t).length / t) * 100).toFixed(3) +
      "%"
  );
});
```

<br>

### 크로아티아 알파뱃

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/468b25f0-57fc-4192-9db9-96c1243fbba2)
![image](https://github.com/ssc9811/algorithm/assets/39263149/bc00190e-b5ec-449e-8a7c-e0e40b0440e8)

```javascript
let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let x of arr) {
  input = input.replace(new RegExp(x, "g"), " ");
}

console.log(input.length);
```

<br>

### 그룹 단어 체커

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/29656b8d-56f1-4356-9b97-68546e32370a)

```javascript
let [n, ...strings] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

for (let str of strings) {
  let arr = [];
  group = true;
  for (let x of str) {
    if (arr.indexOf(x) === -1) {
      arr.push(x);
    } else if (arr[arr.length - 1] !== x) {
      group = false;
      break;
    }
  }
  if (group) answer += 1;
}

console.log(answer);
```

<br>

### 너의 평점은

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/5d8ecd5c-9cd8-408d-8797-344c3011e5fc)
![image](https://github.com/ssc9811/algorithm/assets/39263149/ac493b73-2d09-4cf0-9b39-eb76077ccc63)
![image](https://github.com/ssc9811/algorithm/assets/39263149/85e3c657-40cb-4306-bb65-dfcf6c95d178)

```javascript
const gradeObj = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
  P: 0.0,
};

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

let s = 0;
let t = 0;

for (let [a, b, c] of input) {
  if (c === "P") continue;
  s += b * 1;
  t += b * gradeObj[c];
}

console.log((t / s).toFixed(6));
```

</blockquote>

<br>
<br>

## 2차원 배열

<blockquote>

<br>

### 행렬 덧셈

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/fef66827-ab0f-4195-b73f-7489ec116ea6)

```javascript
let [n, ...lists] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [y, x] = n;
let answer = "";

for (let i = 0; i < lists.length / 2; i++) {
  for (let j = 0; j < x; j++) {
    answer += `${String(lists[i][j] + lists[y + i][j])} `;
  }
  answer += "\n";
}

console.log(answer.trim());
```

<br>

### 최댓값

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/b2c74b7d-7721-45ee-adcb-140c332605c1)
![image](https://github.com/ssc9811/algorithm/assets/39263149/5ef4a663-9575-4d26-ba0e-5149e91e6ace)

```javascript
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) =>
    x
      .trim()
      .split(" ")
      .map((x) => +x)
  );

let max = 0;
let coordinate = "";
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max <= input[i][j]) {
      max = input[i][j];
      coordinate = `${i + 1} ${j + 1}`;
    }
  }
}

console.log(max);
console.log(coordinate);
```

<br>

### 새로읽기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/354b996e-e6d2-4cf6-90f4-8e982630b7a4)
![image](https://github.com/ssc9811/algorithm/assets/39263149/8c20861b-92fe-476d-a56b-7f8e4fb2b92a)

```javascript
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));

const maxLength = Math.max(...input.map((i) => i.length));

let answer = "";
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    answer += input[j][i] ? input[j][i] : "";
  }
}

console.log(answer);
```

<br>

### 색종이

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/81bd18f5-7d96-420a-9d41-f4c2639d27f0)
![image](https://github.com/ssc9811/algorithm/assets/39263149/1eee8523-e0b0-4037-9906-c4c47d5fc11a)

```javascript
const [n, ...lists] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => +t));

const arr = Array.from(Array(100), () => Array(100).fill(0));
let answer = 0;

for (let i = 0; i < n; i++) {
  const [startX, startY] = lists[i];
  for (let w = 0; w < 10; w++) {
    for (let h = 0; h < 10; h++) {
      if (arr[startX + w][startY + h] !== 0) {
        continue;
      } else {
        arr[startX + w][startY + h] = 1;
        answer++;
      }
    }
  }
}
console.log(answer);
```

</blockquote>

<br>
<br>

## 일반 수학 1

<blockquote>

<br>

### 진법 변환 1

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/0dc374ae-629b-46aa-be8b-27a963dde860)

```javascript
const [N, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(N, B));
```

<br>

### 진법 변환 2

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/38c23be8-2768-48e6-92d5-9eb1e16fa752)

```javascript
const [N, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(N.toString(B).toUpperCase());
```

<br>

### 중앙 이동 알고리즘

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/893d1472-31b0-4336-847f-02d50f79d88d)
![image](https://github.com/ssc9811/algorithm/assets/39263149/97987087-52fd-4fdf-9f49-6a178750f035)

```javascript
const N = +require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(Math.pow(Math.pow(2, N) + 1, 2)); // 정답 1
// console.log((2 ** N + 1) ** 2); 정답 2
```

<br>

### 벌집

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/9e58759b-5c2f-42af-9f88-bfbd78da6776)
![image](https://github.com/ssc9811/algorithm/assets/39263149/955dbf08-5fee-4f4e-ba7d-36cb87b6b145)

```javascript
const N = +require("fs").readFileSync("/dev/stdin").toString().trim();

let range = 1;
let block = 1;

while (block < N) {
  block += 6 * range;
  range++;
}

console.log(range);
```

<br>

### 분수찾기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/1e1e7fe0-088c-46c8-9f5c-4b7046ebff44)

```javascript
let N = +require("fs").readFileSync("/dev/stdin").toString().trim();

let groupCounter = 0;

while (N > 0) {
  groupCounter++;
  N -= groupCounter;
}

const arr = [];
for (let i = 1; i <= groupCounter; i++) {
  arr.push(i);
}

if (groupCounter % 2 == 0) {
  console.log(
    `${arr[N + groupCounter - 1]}/${arr.reverse()[N + groupCounter - 1]}`
  );
} else {
  console.log(
    `${arr.reverse()[N + groupCounter - 1]}/${
      arr.reverse()[N + groupCounter - 1]
    }`
  );
}
```

### 정리

```
이 문제의 핵심은 입력 받은 값 N이 어느 그룹에 속하는지를 구하는게 핵심이다.
어느 그룹에 속하는지 알게되면, 그 그룹 count 값이 짝수인지 홀수인지이 따라서 출력해주면 된다.
```

<br>

### 달팽이는 올라가고 싶다

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/f4a99ad3-001c-4a99-aea4-aadb304721d9)

```javascript
const [A, B, V] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

console.log(Math.ceil((V - B) / (A - B)));
```

<br>

### 큰 수 A+B

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/49596520-0e1d-41da-9001-2f3bcecda56d)

```javascript
const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => v);

const answer = BigInt(A) + BigInt(B);
console.log(answer.toString());
```

</blockquote>

<br>
<br>

## 약수, 배수와 소수

<blockquote>

<br>

### 배수와 약수

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/d9d480ff-45d9-4301-a672-d32275c067eb)

```javascript
const lists = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => +t));

// 0 제거
lists.pop();

lists.map((list) => {
  const [A, B] = list;
  if (A % B === 0) {
    console.log("multiple");
  } else if (B % A === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
});
```

<br>

### 약수 구하기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/af902470-befe-4f34-8709-1061ee7d2ed2)

```javascript
const [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let count = 0;
let answer = 0;

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    count++;
  }
  if (count === K) {
    answer = i;
    break;
  }
}

console.log(answer !== 0 ? answer : 0);
```

<br>

### 약수들의 합

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/08246ee2-c5f3-483c-b589-e67682746fba)

```javascript
const [...N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

N.pop();

N.forEach((item) => {
  let answer = [];
  for (let i = 1; i < item; i++) {
    if (item % i === 0) {
      answer.push(i);
    }
  }
  if (item === answer.reduce((acc, cur) => (acc += cur))) {
    console.log(`${item} = ${answer.join(" + ")}`);
  } else {
    console.log(`${item} is NOT perfect.`);
  }
});
```

<br>

### 소수 찾기

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/7676dc14-6788-4e08-9fdc-45e88faa355a)

```javascript
const [[N], [...primes]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => +t));

let answer = 0;
function isPrime(num) {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  answer += 1;
}

for (let prime of primes) {
  if (prime !== 1) {
    isPrime(prime);
  }
}
console.log(answer);
```

</blockquote>
