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

<br>

### 1-16 나누어 떨어지는 숫자 배열

<br>

![image](https://user-images.githubusercontent.com/39263149/229041864-2bcde95d-9ff8-4d50-81b1-c5f3ab575424.png)

```javascript
function solution(arr, divisor) {
  const answer = arr
    .filter((element) => element % divisor === 0)
    .sort((a, b) => a - b);
  return answer.length > 0 ? answer : [-1];
}
```

<br>

### 1-17 제일 작은 수 제거하기

<br>

![image](https://user-images.githubusercontent.com/39263149/229266075-854fed1c-8d53-41ad-804c-6c17cd7d63ef.png)

```javascript
function solution(arr) {
  return arr.length > 1
    ? arr.filter((item) => item !== Math.min(...arr))
    : [-1];
}
```

<br>

### 1-18 음양 더하기

<br>

![image](https://user-images.githubusercontent.com/39263149/229352709-ad7bb72c-4b72-4adf-a754-df37d49e44d3.png)

```javascript
function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((absolute, index) =>
    signs[index] ? (answer += absolute) : (answer -= absolute)
  );
  return answer;
}
```

### 다른 사람 풀이

```javascript
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
```

### 느낀점

```
아직 reduce보단 map이 익숙하고 편한것 같다.
고차함수 외부 변수에 무언가 계속 더하거나 빼는 일이(누산기) 반복되면 reduce를 생각하는 습관을 가지면 좋을 것 같다.
```

<br>

### 1-19 핸드폰 번호 가리기

<br>

<img width="580" alt="image" src="https://user-images.githubusercontent.com/39263149/229475840-7ec076a8-bf1c-46d4-89bf-6ce8c1d2ec58.png">

```javascript
function solution(phone_number) {
  return `${"*".repeat(phone_number.length - 4)}${phone_number.slice(-4)}`;
}
```

<br>

### 1-20 없는 숫자 더하기

<br>

![image](https://user-images.githubusercontent.com/39263149/229660156-61b6cb52-e5dc-4893-a8e4-aad3bc89bdf4.png)

```javascript
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => (acc += cur));
}
```

<br>

### 1-21 가운데 글자 가져오기

<br>

![스크린샷 2022-09-27 오후 7 40 58](https://user-images.githubusercontent.com/39263149/192504998-5e976626-f3ec-4776-b1c6-e31442316700.png)

```javascript
function solution(s) {
  const mid = s.length / 2;
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[Math.floor(mid)];
}
```

<br>

### 1-22 수박수박수박수박수박수?

<br>

<img width="566" alt="image" src="https://user-images.githubusercontent.com/39263149/230328145-b9d3f053-71b9-4511-bfb1-8e4d8844f712.png">

```javascript
function solution(n) {
  "수박".repeat(2).substring(0, n);
}
```

<br>

### 1-23 문자열 내림차순으로 배치하기

<br>

<img width="576" alt="image" src="https://user-images.githubusercontent.com/39263149/230565777-caca3436-fd36-4054-9744-0675604b5f55.png">

```javascript
function solution(s) {
  return s.split("").sort().reverse().join("");
}
```

<br>

### 1-24 문자열 다루기 기본

<br>

<img width="584" alt="image" src="https://user-images.githubusercontent.com/39263149/230567916-5fe77d35-982a-4ccd-954f-d149059bcefe.png">

```javascript
function solution(s) {
  const regExp = /^[0-9]+$/;
  return s.length === 4 || s.length === 6 ? regExp.test(s) : false;
}
```

<br>

### 1-25 내적

<br>

<img width="569" alt="image" src="https://user-images.githubusercontent.com/39263149/230756259-7418bb69-8af2-4492-9180-9cc46e347890.png">

```javascript
function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}
```

<br>

### 1-26 부족한 금액 계산하기

<br>

<img width="563" alt="image" src="https://user-images.githubusercontent.com/39263149/230874814-2eb3fa29-8ce9-4027-bf25-05dee58efe6a.png">

```javascript
function solution(price, money, count) {
  let answer = (count * (price + price * count)) / 2 - money;
  return answer > 0 ? answer : 0;
}
```

<br>

### 1-27 행렬의 덧셈

<br>

<img width="574" alt="image" src="https://user-images.githubusercontent.com/39263149/231153590-ba4f6a1a-7867-4c07-a6a4-4245115fb37f.png">

### 풀이 1

```javascript
function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
```

### 풀이 2

```javascript
function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((value, j) => value + arr2[i][j]));
}
```

<br>

### 1-28 직사각형 별찍기

<br>

![image](https://user-images.githubusercontent.com/39263149/231320247-017ac7dd-8ee4-4ed7-bfd8-6b0a67f3947f.png)

### 풀이 1

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const width = Number(n[0]),
    height = Number(n[1]);
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= width; j++) {
      process.stdout.write("*");
    }
    console.log("");
  }
});
```

### 풀이 2

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const width = Number(n[0]),
    height = Number(n[1]);
  for (let i = 1; i <= height; i++) {
    console.log("*".repeat(width));
  }
});
```

<br>

### 1-29 최대공약수와 최소공배수

<br>

![image](https://user-images.githubusercontent.com/39263149/231639615-3fb37e0a-f954-4c01-baa3-a8b64f8dc5e1.png)

```javascript
function solution(num1, num2) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(num1, num2), lcm(num1, num2)];
}
```

<br>

### 1-30 약수의 개수와 덧셈

<br>

<img width="567" alt="image" src="https://user-images.githubusercontent.com/39263149/231938990-3e712240-5c91-4433-90d6-f3b532ca7b0e.png">

```javascript
const check = (num) => {
  let cnt = 0;
  let index = 0;
  while (num >= index) {
    if (num % index === 0) {
      cnt += 1;
    }
    index += 1;
  }
  return cnt % 2 ? -1 * num : num;
};

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    answer += check(i);
  }
  return answer;
}
```

### 배운점

```
제곱근이 정수면 약수의 개수가 홀수다.
```

<br>

### 1-31 같은 숫자는 싫어

<br>

![image](https://user-images.githubusercontent.com/39263149/232190209-988e822c-843b-4715-91b3-3553c0baaa20.png)

```javascript
function solution(arr) {
  return arr.filter((item, index) => item !== arr[index + 1]);
}
```

<br>

### 1-32 이상한 문자 만들기

<br>

![image](https://user-images.githubusercontent.com/39263149/232263306-aec47dcc-da22-4d15-979a-cafee064cecf.png)

```javascript
function solution(s) {
  return s
    .split(" ")
    .map((world) =>
      world
        .split("")
        .map((char, index) =>
          index % 2 ? char.toLowerCase() : char.toUpperCase()
        )
        .join("")
    )
    .join(" ");
}
```

<br>

### 1-33 문자열 내 마음대로 정렬하기

<br>

<img width="572" alt="image" src="https://user-images.githubusercontent.com/39263149/232467257-89c2cdb0-6f60-4a49-9cf5-aa54f41de8dc.png">

```javascript
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return +1;
    else if (a[n] === b[n]) return a > b ? 1 : -1;
    else return -1;
  });
}
```

<br>

### 1-34 3진법 뒤집기

<br>

<img width="567" alt="image" src="https://user-images.githubusercontent.com/39263149/232641091-d4689e52-65f6-4db0-b602-b61a98e3f368.png">

```javascript
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
```

### 배운 내용

#### 10진수에서 n진수로 변환하는 방법

```javascript
var decimal = 1023;

var binary = decimal.toString(2); // 2진수로
var octal = decimal.toString(8); // 8진수로
var hex = decimal.toString(16); // 16진수로
```

#### n진수에서 10진수로 변환하는 방법

```javascript
var binary = "1111111111";
var decimal = parseInt(binary, 2); // 2진수에서 10진수로

var octal = "1777";
var decimal = parseInt(octal, 8); // 8진수에서 10진수로

var hex = "3ff";
var decimal = parseInt(hex, 16); // 16진수에서 10진수로
```

<br>

### 1-35 예산

<br>

<img width="565" alt="image" src="https://user-images.githubusercontent.com/39263149/233092186-6c5720ef-af22-4249-a5c0-dd5af3fc9089.png">

```javascript
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((list) => {
      budget -= list;
      if (budget >= 0) {
        return list;
      }
    }).length;
}
```

<br>

### 1-36 삼총사

<br>

<img width="572" alt="image" src="https://user-images.githubusercontent.com/39263149/233388204-b88da72d-914b-4f61-ad7d-bab6917c7fa8.png">

```javascript
function solution(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count += 1;
        }
      }
    }
  }
  return count;
}
```

<br>

### 1-37 최소직사각형

<br>

<img width="566" alt="image" src="https://user-images.githubusercontent.com/39263149/233518193-930dcd12-3455-4c3a-9834-7f0bc42a3741.png">

```javascript
function solution(sizes) {
  const width = [];
  const height = [];
  sizes.map((size) => {
    size.sort((a, b) => a - b);
    width.push(size[0]);
    height.push(size[1]);
  });
  return Math.max(...width) * Math.max(...height);
}
```

<br>

### 1-38 비밀지도

<br>

<img width="578" alt="image" src="https://user-images.githubusercontent.com/39263149/233760661-3674b5e7-fea1-4a02-ae67-465106a0d3d8.png">
<img width="579" alt="image" src="https://user-images.githubusercontent.com/39263149/233760669-5bf728f0-73fd-422e-bfae-d7ef55c13099.png">
<img width="563" alt="image" src="https://user-images.githubusercontent.com/39263149/233760676-591e0e22-98f1-448b-8336-d734d57b1220.png">

```javascript
function solution(n, arr1, arr2) {
  const answer = [];

  const one = arr1.map((x) => x.toString(2).padStart(n, 0));
  const two = arr2.map((x) => x.toString(2).padStart(n, 0));

  for (let i = 0; i < n; i++) {
    let sum = "";
    for (let j = 0; j < n; j++) {
      if (one[i][j] === "0" && one[i][j] === two[i][j]) {
        sum += " ";
      } else {
        sum += "#";
      }
    }
    answer.push(sum);
  }
  return answer;
}
```

<br>

### 1-39 시저암호

<br>

<img width="560" alt="image" src="https://user-images.githubusercontent.com/39263149/233820089-4a17f962-baf4-41ea-8478-c1f0101eb70e.png">

```javascript
function solution(string, n) {
  return String.fromCharCode(
    string
      .split("")
      .map((char) => {
        const unicode = char.charCodeAt(0);
        if (char === " ") {
          return " ";
        }
        if ((unicode < 90 && unicode + n > 90) || unicode + n > 122) {
          return unicode - 26 + n;
        } else {
          return unicode + n;
        }
      })
      .join("")
  );
}
```

<br>

### 1-40 숫자 문자열과 영단어

<br>

![image](https://user-images.githubusercontent.com/39263149/234007826-de3e651b-e20a-4198-b5d1-54a1532fa8c5.png)
![image](https://user-images.githubusercontent.com/39263149/234007932-14023e33-9d01-4fdd-8e5f-acf41fb04089.png)

```javascript
function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numbers.map((number, i) => (s = s.split(number).join(i)));
  return +s;
}
```

<br>

### 1-41 K번째수

<br>

![image](https://user-images.githubusercontent.com/39263149/234012042-8cbbee20-cdd0-4bed-bf08-331b45e1de5c.png)

```javascript
function solution(array, commands) {
  return commands.map(
    (command) =>
      array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
        command[2] - 1
      ]
  );
}
```

<br>

### 1-42 크기가 작은 부분문자열

<br>

<img width="567" alt="image" src="https://user-images.githubusercontent.com/39263149/234615656-87d9bca4-30c9-4f18-9771-508173b8b2f1.png">

```javascript
function solution(t, p) {
  const pLength = p.length;
  const answer = [];
  for (let i = 0; i < t.length - pLength + 1; i++) {
    answer.push(t.slice(i, pLength + i));
  }
  return answer.filter((list) => list <= p).length;
}
```

<br>

### 1-43 두 개 뽑아서 더하기

<br>

<img width="567" alt="image" src="https://user-images.githubusercontent.com/39263149/234859082-c38f6a23-0abf-4f82-8421-755e09c4914b.png">

### filter를 통한 중복 제거

```javascript
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  return answer
    .filter((item, index) => answer.indexOf(item) === index)
    .sort((a, b) => a - b);
}
```

### Set을 통한 중복 제거

```javascript
function solution(numbers) {
  const temp = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(temp)].sort((a, b) => a - b);
}
```

<br>

### 1-44 콜라 문제

<br>

![image](https://user-images.githubusercontent.com/39263149/234882987-4c1b0322-8d0b-4103-b810-ff0d5c5a139b.png)
![image](https://user-images.githubusercontent.com/39263149/234883029-3da08e7b-e2a8-4030-bcb0-62c41aa15b79.png)

```javascript
function solution(a, b, n) {
  let count = 0;
  let less = 0;
  while (n >= a) {
    less = n % a;
    n = Math.floor(n / a) * b;
    count += n;
    n += less;
  }
  return count;
}
```

```javascript
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += parseInt(n / a) * b;
    n = parseInt(n / a) * b + (n % a);
  }
  return answer;
}
```

<br>

### 1-45 푸드 파이트 대회

<br>

<img width="571" alt="image" src="https://user-images.githubusercontent.com/39263149/235339529-d39ac7d4-5dfb-4065-ad44-860b07faf358.png">
<img width="571" alt="image" src="https://user-images.githubusercontent.com/39263149/235339532-bc74fa4b-ae68-4c2a-a1db-ac7abb7267af.png">

```javascript
function solution(food) {
  const answer = [];
  const newArray = food.map((amount) =>
    amount % 2 === 0 ? amount / 2 : (amount - 1) / 2
  );
  newArray.map((item, index) => {
    while (item > 0) {
      answer.push(index);
      item--;
    }
  });
  const result = [...answer, 0, ...answer.reverse()];
  return result.join("");
}
```

### 코드 정리

```javascript
function solution(food) {
  const answer = [];
  food.map((amount, index) => {
    let item = Math.floor(amount / 2);
    while (index !== 0 && item > 0) {
      answer.push(index);
      item--;
    }
  });
  const result = [...answer, 0, ...answer.reverse()];
  return result.join("");
}
```
