# 0단계 문제

<br>

## 0-1 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

<br>

<img width="575" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/420163fc-a995-483c-81f4-31acdcf8baf2">
<img width="570" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/b60bd4f5-bef1-44f8-bde1-81fb70225cf0">

```javascript
function solution(myString, pat) {
  return myString.slice(0, myString.lastIndexOf(pat) + pat.length);
}
```

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

## 1-7 문자열 내 p와 y의 개수

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

## 1-8 나머지가 1이 되는 수 찾기

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

## 1-9 정수 내림차순으로 배치하기

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

## 1-10 문자열을 정수로 바꾸기

<br>

<img width="503" alt="image" src="https://user-images.githubusercontent.com/39263149/227694871-b1c39ff8-79a1-49db-b5b8-8c8aed33848a.png">

```javascript
function solution(string) {
  return +string;
}
```

<br>

## 1-11 하샤드 수

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

## 1-12 두 정수 사이의 합

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

## 1-13 정수 제곱근 판별

<br>

![image](https://user-images.githubusercontent.com/39263149/228220698-750c9b3d-c445-4a12-a4ea-c680392b4654.png)

```javascript
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
```

<br>

## 1-14 콜라츠 추측

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

## 1-15 서울에서 김서방 찾기

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

## 1-16 나누어 떨어지는 숫자 배열

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

## 1-17 제일 작은 수 제거하기

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

## 1-18 음양 더하기

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

## 1-19 핸드폰 번호 가리기

<br>

<img width="580" alt="image" src="https://user-images.githubusercontent.com/39263149/229475840-7ec076a8-bf1c-46d4-89bf-6ce8c1d2ec58.png">

```javascript
function solution(phone_number) {
  return `${"*".repeat(phone_number.length - 4)}${phone_number.slice(-4)}`;
}
```

<br>

## 1-20 없는 숫자 더하기

<br>

![image](https://user-images.githubusercontent.com/39263149/229660156-61b6cb52-e5dc-4893-a8e4-aad3bc89bdf4.png)

```javascript
function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => (acc += cur));
}
```

<br>

## 1-21 가운데 글자 가져오기

<br>

![스크린샷 2022-09-27 오후 7 40 58](https://user-images.githubusercontent.com/39263149/192504998-5e976626-f3ec-4776-b1c6-e31442316700.png)

```javascript
function solution(s) {
  const mid = s.length / 2;
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[Math.floor(mid)];
}
```

<br>

## 1-22 수박수박수박수박수박수?

<br>

<img width="566" alt="image" src="https://user-images.githubusercontent.com/39263149/230328145-b9d3f053-71b9-4511-bfb1-8e4d8844f712.png">

```javascript
function solution(n) {
  "수박".repeat(2).substring(0, n);
}
```

<br>

## 1-23 문자열 내림차순으로 배치하기

<br>

<img width="576" alt="image" src="https://user-images.githubusercontent.com/39263149/230565777-caca3436-fd36-4054-9744-0675604b5f55.png">

```javascript
function solution(s) {
  return s.split("").sort().reverse().join("");
}
```

<br>

## 1-24 문자열 다루기 기본

<br>

<img width="584" alt="image" src="https://user-images.githubusercontent.com/39263149/230567916-5fe77d35-982a-4ccd-954f-d149059bcefe.png">

```javascript
function solution(s) {
  const regExp = /^[0-9]+$/;
  return s.length === 4 || s.length === 6 ? regExp.test(s) : false;
}
```

<br>

## 1-25 내적

<br>

<img width="569" alt="image" src="https://user-images.githubusercontent.com/39263149/230756259-7418bb69-8af2-4492-9180-9cc46e347890.png">

```javascript
function solution(a, b) {
  return a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
}
```

<br>

## 1-26 부족한 금액 계산하기

<br>

<img width="563" alt="image" src="https://user-images.githubusercontent.com/39263149/230874814-2eb3fa29-8ce9-4027-bf25-05dee58efe6a.png">

```javascript
function solution(price, money, count) {
  let answer = (count * (price + price * count)) / 2 - money;
  return answer > 0 ? answer : 0;
}
```

<br>

## 1-27 행렬의 덧셈

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

## 1-28 직사각형 별찍기

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

## 1-29 최대공약수와 최소공배수

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

## 1-30 약수의 개수와 덧셈

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

## 1-31 같은 숫자는 싫어

<br>

![image](https://user-images.githubusercontent.com/39263149/232190209-988e822c-843b-4715-91b3-3553c0baaa20.png)

```javascript
function solution(arr) {
  return arr.filter((item, index) => item !== arr[index + 1]);
}
```

<br>

## 1-32 이상한 문자 만들기

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

## 1-33 문자열 내 마음대로 정렬하기

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

## 1-34 3진법 뒤집기

<br>

<img width="567" alt="image" src="https://user-images.githubusercontent.com/39263149/232641091-d4689e52-65f6-4db0-b602-b61a98e3f368.png">

```javascript
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
```

### 배운 내용

### 10진수에서 n진수로 변환하는 방법

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

## 1-35 예산

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

## 1-36 삼총사

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

## 1-37 최소직사각형

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

## 1-38 비밀지도

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

## 1-39 시저암호

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

## 1-40 숫자 문자열과 영단어

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

## 1-41 K번째수

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

## 1-42 크기가 작은 부분문자열

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

## 1-43 두 개 뽑아서 더하기

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

## 1-44 콜라 문제

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

## 1-45 푸드 파이트 대회

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

<br>

## 1-46 가장 가까운 같은 글자

<br>

<img width="565" alt="image" src="https://user-images.githubusercontent.com/39263149/235342169-4f47c603-6174-416c-8cc8-655f95c6d195.png">

```javascript
function solution(s) {
  const string = [];
  const answer = [];
  s.split("").map((char, index) => {
    string.push(char);
    console.log(
      "string.lastIndexOf(char, index - 1)",
      string.lastIndexOf(char, index - 1)
    );
    if (index === 0 || string.lastIndexOf(char, index - 1) === -1) {
      answer.push(-1);
    } else {
      answer.push(
        string.lastIndexOf(char, index) - string.lastIndexOf(char, index - 1)
      );
    }
  });
  return answer;
}
```

### 코드 정리

```javascript
const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
```

<br>

## 1-47 2016년

<br>

<img width="571" alt="image" src="https://user-images.githubusercontent.com/39263149/235417025-41633d6a-e957-4455-9622-49182c644e9d.png">

### date 객체 사용 O

```javascript
function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}
```

### date 객체 사용 X

```javascript
function solution(a, b) {
  const monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDays = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let days = b;
  for (let i = 0; i < a - 1; i++) {
    days += monthDays[i];
  }
  return weekDays[days % 7];
}
```

<br>

## 1-48 모의고사

<br>

<img width="569" alt="image" src="https://user-images.githubusercontent.com/39263149/235676389-7262592d-18b6-4091-9ad8-00c189e3cf93.png">
<img width="561" alt="image" src="https://user-images.githubusercontent.com/39263149/235676452-ad665cf4-f6c0-4828-83bc-111e47e61dce.png">

```javascript
function solution(answers) {
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const counts = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (a1[i % a1.length] === answers[i]) counts[0] += 1;
    if (a2[i % a2.length] === answers[i]) counts[1] += 1;
    if (a3[i % a3.length] === answers[i]) counts[2] += 1;
  }

  const answer = [];
  counts.forEach(
    (count, index) => Math.max(...counts) === count && answer.push(index + 1)
  );
  return answer;
}
```

<br>

## 1-49 추억 점수

<br>

<img width="570" alt="image" src="https://user-images.githubusercontent.com/39263149/235940448-4ccb06fa-bee4-479b-81a6-4232d65ad08f.png">
<img width="573" alt="image" src="https://user-images.githubusercontent.com/39263149/235940505-1f06385d-6f24-442a-83a0-89e12e60d3b7.png">

```javascript
function solution(name, yearning, photo) {
  const newObj = name.reduce((acc, curr, idx) => {
    acc[curr] = yearning[idx];
    return acc;
  }, new Object());

  return photo.map((arr1) => {
    let sum = 0;
    arr1.map((item) => {
      sum += Object.keys(newObj).includes(item) ? newObj[item] : 0;
    });
    return sum;
  });
}
```

### 다른 사람 풀이

```javascript
function solution(name, yearning, photo) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }
  return photo.map((value) =>
    value.map((v) => (obj[v] ? obj[v] : 0)).reduce((acc, cur) => acc + cur, 0)
  );
}
```

### 느낀점

```
문제를 풀고자 했던 생각은 동일해서 다행이다
reduce 활용이 너무 부족한 거 같다
```

<br>

## 1-50 포켓몬

<br>

<img width="579" alt="image" src="https://user-images.githubusercontent.com/39263149/236124644-60885424-c6cf-4d71-b928-5c610f041938.png">
<img width="568" alt="image" src="https://user-images.githubusercontent.com/39263149/236124670-9633dc57-a0ab-4fa4-881a-345f65722763.png">

```javascript
function solution(nums) {
  const length = nums.length / 2;
  const unique = nums.filter(
    (num, index) => nums.indexOf(num) === index
  ).length;

  return unique > length ? length : unique;
}
```

<br>

### 배열 내 중복 제거 방법

<hr>

#### Set

```javascript
const arr = [...new Set(nums)];
console.log(arr.length);

const unique = new Set(nums);
console.log(unique.size);

console.log(arr.length === unique.size); // true
```

<br>

#### indexOf(), filter()

```javascript
nums.filter((num, index) => nums.indexOf(num) === index);
```

<br>

<br>

## 1-51 소수 찾기

<br>

<img width="509" alt="image" src="https://user-images.githubusercontent.com/39263149/236388185-ec5fad86-9aa6-49e5-b2e4-b44b0552d81e.png">

### 효용성 테스트 실패

```javascript
function solution(n) {
  let answer = 0;
  const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    answer += 1;
  };

  for (let i = 2; i <= n; i++) {
    isPrime(i);
  }
  return answer;
}
```

### 효용성 테스트 통과

```javascript
function solution(nums) {
  const prime = new Array(nums + 1).fill(1);
  let count = nums - 1;
  for (let i = 2; i < Math.sqrt(nums); i++)
    if (prime[i])
      for (let j = i ** 2; j <= nums; j += i)
        if (prime[j]) count--, (prime[j] = 0);
  return count;
}
```

<br>

## 1-52 과일 장수

<br>

<img width="572" alt="image" src="https://user-images.githubusercontent.com/39263149/236712627-e77f4ffd-3cfe-4e5f-9cf9-16e0c3727829.png">
<img width="566" alt="image" src="https://user-images.githubusercontent.com/39263149/236712635-4b577c17-d2c9-4a32-832b-f3fef4c9a003.png">

```javascript
function solution(k, m, score) {
  let answer = 0;
  const scoreSorted = score.sort((a, b) => b - a);

  for (let i = m - 1; i < scoreSorted.length; i += m) {
    answer += scoreSorted[i] * m;
  }

  return answer;
}
```

<br>

## 1-53 소수 만들기

<br>

<img width="571" alt="image" src="https://user-images.githubusercontent.com/39263149/236714257-c8da4a16-c163-43d9-88aa-e53edfbb670a.png">

```javascript
function solution(nums) {
  let answer = 0;
  const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    answer += 1;
  };
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return answer;
}
```

<br>

## 1-54 명예의 전당

<br>

<img width="569" alt="image" src="https://user-images.githubusercontent.com/39263149/236718513-802e89b3-98cc-4a3a-b39f-6aeb8d52d753.png">
<img width="577" alt="image" src="https://user-images.githubusercontent.com/39263149/236718602-25b5543c-8c00-4450-b365-a2d23a46fbc2.png">

```javascript
function solution(k, score) {
  const scoreBoard = [];
  const answer = [];
  for (let i = 0; i < score.length; i++) {
    if (i <= k - 1) {
      scoreBoard.push(score[i]);
    } else {
      if (scoreBoard[k - 1] < score[i]) {
        scoreBoard.pop();
        scoreBoard.push(score[i]);
      }
    }
    scoreBoard.sort((a, b) => b - a);
    answer.push(Math.min(...scoreBoard));
  }
  return answer;
}
```

<br>

## 1-55 실패율

<br>

<img width="565" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/6f4d3c36-7232-4ae6-8e51-db6f35637e12">
<img width="577" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/6faad7b6-1b68-4aea-8200-178efe9ebbc6">
<img width="581" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f9f210b6-ada4-4f85-9d10-e7fba963b05f">

```javascript
function solution(N, stages) {
  const failRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player === stage).length;
    const playerChallenging = stages.filter((player) => player >= stage).length;
    failRate.push([stage, playerReached / playerChallenging]);
  }
  failRate.sort((a, b) => b[1] - a[1]);
  return failRate.map((rate) => rate[0]);
}
```

<br>

## 1-56 카드 뭉치

<br>

<img width="572" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/bbca57cf-cfb8-4d58-b073-89f11c90c695">
<img width="577" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/9695fcb3-2a96-458c-b05f-78b8e85cb966">

### 풀이

```javascript
function solution(cards1, cards2, goal) {
  let card1Index = 0;
  let card2Index = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[card1Index]) {
      card1Index++;
    } else if (goal[i] === cards2[card2Index]) {
      card2Index++;
    }
  }
  return card1Index + card2Index === goal.length ? "Yes" : "No";
}
```

### 다른 사람 풀이

```
for ~ of 문을 통해 각 단어를 뽑음
shift()를 통해 첫 값을 확인하고 지움
```

```javascript
function solution(cards1, cards2, goal) {
  for (const word of goal) {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      return "No";
    }
  }
  return "Yes";
}
```

<br>

## 1-57 다트 게임

<br>

<img width="567" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/ea76db4e-d919-427f-acb1-03bc03adfa81">
<img width="563" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/493feb39-6d01-4eb9-8746-9b47ebbb27e3">
<img width="486" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/748fbd84-1e0e-4ba2-997f-7440d9e8652a">

```javascript
function solution(dartResult) {
  const point = [];
  const bonus = [];
  const score = [];

  for (let i = 0; i < 3; i++) {
    // point 찾기
    point.push(parseInt(dartResult));
    dartResult = dartResult.slice(String(point[i]).length);

    // bonus 찾기
    switch (dartResult[0]) {
      case "S":
        bonus[i] = 1;
        dartResult = dartResult.slice(1);
        break;
      case "D":
        bonus[i] = 2;
        dartResult = dartResult.slice(1);
        break;
      case "T":
        bonus[i] = 3;
        dartResult = dartResult.slice(1);
        break;
    }

    // 제곱 처리
    score[i] = point[i] ** bonus[i];

    // option 처리
    if (dartResult[0] === "#" || dartResult[0] === "*") {
      if (dartResult[0] === "#") {
        score[i] = score[i] * -1;
      } else {
        if (score[i - 1]) {
          score[i - 1] = score[i - 1] * 2;
        }
        score[i] = score[i] * 2;
      }
      dartResult = dartResult.slice(1);
    }
  }

  return score.reduce((acc, cur) => (acc += cur));
}
```

### 느낀점

```
알고리즘을 멋잇게 풀어야만 된다고 생각했다.
조금 더 쉬운, 코드를 더 줄일 수 있는 방법을 생각하다 보니 더 어렵게 느껴졌던 것 같다.

내가 알고 있는 범위 내에서 최대한 해결해보고, 어려우면 그때 더 공부를 하는 방식이 맞다는걸 이 문제를 통해 느꼈다

처음 생각했던 방식 (위 풀이)이 너무 하드 코딩이라고 생각하고 다른 방법을 찾아보려 애를 쓴게 시간을 더 잡아먹었다.

-> 정규식은 공부할 필요가 있다
```

<br>

## 1-58 덧칠하기

<br>

<img width="576" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/ede6fc86-eec0-4014-bb48-2083501385a3">
<img width="570" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/09a56380-410f-4818-a6d6-163ea3498252">
<img width="573" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/9ec946e9-790a-4a67-969b-346fc56cd47d">

```javascript
function solution(n, m, section) {
  let lastSpot = 0;
  let answer = 0;

  for (spot of section) {
    if (spot > lastSpot) {
      lastSpot = spot + m - 1;
      answer++;
    }
  }
  return answer;
}
```

<br>

## 1-59 기사단원의 무기

<br>

<img width="575" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/8bafa10e-afa3-4e14-8942-78dbb4528d5e">
<img width="571" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/819e4c54-5afe-499e-a5d8-60df7781b631">

```javascript
function solution(number, limit, power) {
  const measures = [];

  const getMeasure = (num) => {
    let measureCount = 0;
    for (let i = 1; i * i <= num; i++) {
      if (i * i === num) {
        measureCount++;
      } else if (num % i === 0) {
        measureCount += 2;
      }
    }
    measures.push(measureCount);
  };
  for (let i = 1; i <= number; i++) {
    getMeasure(i);
  }

  return measures.reduce((acc, cur) => {
    if (cur > limit) {
      acc += power;
    } else {
      acc += cur;
    }
    return acc;
  }, 0);
}
```

```javascript
function solution(number, limit, power) {
  let answer = 0;
  for (let num = 1; num <= number; num++) {
    let count = 0;
    for (let j = 1; j * j <= num; j++) {
      if (j * j === num) {
        count++;
      } else if (num % j === 0) {
        count += 2;
      }
    }
    if (count > limit) count = power;
    answer += count;
  }

  return answer;
}
```

<br>

## 1-60 로또의 최고 순위와 최저 순위

<br>

<img width="577" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/cdf38e26-159c-488c-96ec-8c2251cf6005">
<img width="575" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/601bbeb5-0860-46a6-825b-49c861cf5584">
<img width="572" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/ffcf930e-dc00-4609-9728-4f622f86658d">

```javascript
function solution(lottos, win_nums) {
  const rankObj = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  const zeroCount = lottos.reduce((acc, cur) => {
    if (cur === 0) return (acc += 1);
    return acc;
  }, 0);
  const correctNumLength = win_nums
    .sort((a, b) => b - a)
    .filter((win_num) => lottos.includes(win_num)).length;

  return [rankObj[correctNumLength + zeroCount], rankObj[correctNumLength]];
}
```

```javascript
function solution(lottos, win_nums) {
  const answer = [6, 6, 5, 4, 3, 2, 1];

  const matchedCount = lottos.filter((lotto) =>
    win_nums.includes(lotto)
  ).length;
  const zeroCount = lottos.filter((lotto) => !lotto).length;

  return [answer[matchedCount + zeroCount], answer[matchedCount]];
}
```

<br>

## 1-61 숫자 짝궁

<br>

![image](https://github.com/ssc9811/algorithm/assets/39263149/d617598b-d45b-45a2-90a1-def18a0d0f79)
![image](https://github.com/ssc9811/algorithm/assets/39263149/b08a826a-4178-42f5-8a5d-a903d797dd85)

```javascript
function solution(X, Y) {
  let answer = "";
  X = X.split("");
  Y = Y.split("");

  for (let i = 0; i < 10; i++) {
    const curX = X.filter((a) => Number(a) === i).length;
    const curY = Y.filter((a) => Number(a) === i).length;
    answer += String(i).repeat(Math.min(curX, curY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
```

<br>

## 1-62 체육복

<br>

<img width="570" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/0713de8a-4f65-46ab-907f-c7198ed00576">
<img width="565" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/f45ddbdd-fdf1-486c-935f-71ab252f2c04">

```javascript
function solution(n, lost, reserve) {
  const newReserve = reserve
    .filter((student) => !lost.includes(student))
    .sort((a, b) => b - a);
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => b - a);

  let answer = n - lost.length;

  for (let i = 0; i < newReserve.length; i++) {
    for (let j = 0; j < lost.length; j++) {
      if (Math.abs(newReserve[i] - lost[j]) === 1) {
        answer += 1;
        i++;
      }
    }
  }

  return answer;
}
```

<br>

## 1-63 옹알이

<br>

<img width="564" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/860305cb-8d18-4019-9655-9740d848d1a7">
<img width="575" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/c0fcfe4c-7fa0-4f3e-9848-45afe69618cf">

```javascript
function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      babble = babble.split(can[j]).join(" ");
    }

    if (babble.split(" ").join("").length === 0) {
      count += 1;
    }
  }

  return count;
}
```
