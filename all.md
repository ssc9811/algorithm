# 1단계 문제

<br>

## 1-1 짝수와 홀수

<br>

![스크린샷 2022-09-27 오후 7 23 27](https://user-images.githubusercontent.com/39263149/192501641-58739397-f946-417c-9322-5b22c19acf3b.png)

```javascript
function solution(num) {
  var answer = num % 2 == 0 ? "Even" : "Odd";
  return answer;
}
```

### 다른 사람의 풀이

```javascript
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}
```

### 배운 내용

```
나름 짧게 작성했다고 생각했는데, 그냥 한줄로 적은걸 보고 놀랐다.
바로 return하고, 0과 같은지 확인할 필요도 없다.
이유는 공통적으로 여러 프로그래밍 언어에서, 'False = 0' 이고 'True = 1' 혹은 0 이 아닌 경우를 사용하기 때문이다.

홀수 값은 1이 나오므로 true, 짝수는 0이므로 false
```

<br>

## 1-2 평균 구하기

<br>

![스크린샷 2022-09-27 오후 7 23 44](https://user-images.githubusercontent.com/39263149/192501647-f080c573-7e5d-4ee1-877a-d603d7d6ca33.png)

```javascript
function solution(arr) {
  return arr.reduce((arr, cur) => arr + cur, 0) / arr.length;
}
```

<br>

## 1-3 약수의 합

<br>

![스크린샷 2022-09-27 오후 7 23 53](https://user-images.githubusercontent.com/39263149/192501656-b2afcb52-9f34-463a-a876-d822ae6db951.png)

```javascript
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}
```

<br>

## 1-4 자릿수 더하기

<br>

![스크린샷 2022-09-27 오후 7 28 45](https://user-images.githubusercontent.com/39263149/192503559-59714661-0420-4669-928b-d24b17114445.png)

```javascript
function solution(n) {
  let answer = 0;
  String(n)
    .split("")
    .map((x) => (answer += +x));
  return answer;
}
```

### 다른 사람의 풀이

```javascript
function solution(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
```

### 배운 내용

```
arr.reduce(callback[, initialValue])
  callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐
      accumulator : 누산기(중간 저장 공간). 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값
      currentValue : 처리할 현재 요소
      currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
      array (Optional) : reduce()를 호출한 배열

arr.reduce((acc, cur, idx, arr) => {})

기초(vanilla)에 얼마나 소홀했는지 알 수 있는 상황이었다.
물론 해결했으니 다행이긴 하지만 사용 가능한 여러가지 방안이 있는데 내가 원하는거에 맞춰서 변경하려하니 생각의 폭이 너무 쫍아지는 것 같다.
reduce를 까먹었다는게 너무 아쉽다.. 꾸준히 기초를 다져나가야겠다.
```

<br>

## 1-5 정수 제곱근 판별

<br>

![스크린샷 2022-09-27 오후 7 29 18](https://user-images.githubusercontent.com/39263149/192503566-07f570c7-331d-4b36-a6c9-ee129ec5df3d.png)

```javascript
function solution(n) {
  const result = Math.sqrt(n);
  if (result % 1 === 0) {
    return (result + 1) ** 2;
  } else {
    return -1;
  }
}
```

### 다른 사람의 풀이

```javascript
function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
```

### 배운 내용

```
소숫점이 없는 수를 구할때, value % 1 === 0 이면 정수이고, !== 0 이면 소숫점 자릿수가 있는 수이다.
다른 사람풀이에선 소숫점이 있는지 아닌지를, parseInt를 통해 소숫점을 날린 값과 동일한지 비교를 통해 나타냈다.
```

내 풀이를 한 줄로 변환하면

```javascript
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? (Math.sqrt(n) + 1) ** 2 : -1;
}
```

<br>

## 1-6 자연수 뒤집어 배열로 만들기

<br>

![스크린샷 2022-09-27 오후 7 29 33](https://user-images.githubusercontent.com/39263149/192503572-fd3745c8-1e09-49b3-a9bb-cdc045311ee4.png)

```javascript
function solution(number) {
  return number
    .toString()
    .split("")
    .reverse()
    .map((result) => +result);
}
```

### 배운 내용

```
지금까지 경험상, 숫자를 컨트롤하는 것보다 문자로 변환한 후 마지막에 숫자로 변경하는 게 좋은 것 같다

```

<br>

## 1-7 문자열 내 p와 y의 개수

<br>

![스크린샷 2022-09-27 오후 7 30 56](https://user-images.githubusercontent.com/39263149/192503575-b5278357-91c5-4af1-bcc4-9c3b057baf4d.png)

```javascript
function solution(s) {
  const arr = s.toUpperCase().split("");
  const pArr = arr.filter((s) => s === "P");
  const yArr = arr.filter((s) => s === "Y");

  if (pArr.length === yArr.length) {
    return true;
  } else {
    return false;
  }
}
```

### 다른 사람의 풀이

```javascript
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
```

### 배운 내용

```
내 풀이는 그 값을 찾는데에 치중했다면, 다른 사람의 풀이는 알고리즘을 해결하는데에 치중한 코드라고 생각이 든다.
다른 사람의 풀이를 생각해보면, 특정 값이 있다면 그 값으로 split(특정값) 해서 나뉜 배열의 갯수가 나올 것이다 (예를 들어 p가 3개면 배열의 길이는 4)
이런 식으로 배열의 길이가 p인 경우와 y인 경우가 같다면 그 값은 true이다

이런 생각을 어떻게 하셨는지... 신기하다
```

<br>

## 1-8 하샤드 수

<br>

![스크린샷 2022-09-27 오후 7 31 28](https://user-images.githubusercontent.com/39263149/192503578-a29d3019-a411-45b2-b811-7d70d4c43cba.png)

```javascript
function solution(x) {
  return (
    x %
      x
        .toString()
        .split("")
        .reduce((prv, cur) => (prv += +cur), 0) ===
    0
  );
}
```

<br>

## 1-9 정수 내림차순으로 배치하기

<br>

![스크린샷 2022-09-27 오후 7 31 37](https://user-images.githubusercontent.com/39263149/192503552-2ceac5ec-4ad1-40fb-b15c-0ae993551d94.png)

```javascript
function solution(number) {
  return +number
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
}
```

### 배운 내용

```
arr.sort([compareFunction])
compareFunction : 이 값이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬됨

ex)
arr.sort((a,b)=>console.log('a',a,'b',b))
console.log
a 1 b 1
a 8 b 1
a 3 b 8
a 7 b 3
a 2 b 7

arr.sort((a,b)=> b-a) // 내림차순
arr.sort((a,b)=> a-b) // 오름차순

Array.join([separator])는 배열의 각 요소를 구분할 문자열을 지정할 수 있다.
Array.join() 빈칸은 디폴트로 ,(콤마) 값 추가
Array.join('-') 각 배열의 요소를 - 를 통해 구분 ex) 8-7-3-2-1-1


```

<br>

## 1-10 문자열을 정수로 바꾸기

<br>

![스크린샷 2022-09-27 오후 7 31 47](https://user-images.githubusercontent.com/39263149/192503555-cb68b881-5436-405f-b5aa-f0821d7c453c.png)

```javascript
function solution(str) {
  return +str;
}
```

<br>

## 1-11 x만큼 간격이 있는 n개의 숫자

<br>

![스크린샷 2022-09-27 오후 7 32 02](https://user-images.githubusercontent.com/39263149/192503556-13720381-9dac-40c7-9eee-b5d0507103f5.png)

```javascript
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
```

<br>

## 1-12 나머지가 1이 되는 수 찾기

<br>

![스크린샷 2022-09-27 오후 7 32 11](https://user-images.githubusercontent.com/39263149/192503562-9e56809d-8fc5-4749-8812-4dc9faeb4415.png)

```javascript
function solution(n) {
  let answer = 0;
  for (let a = n - 1; a >= 2; a--) {
    if (n % a === 1) answer = a;
  }
  return answer;
}
```

### 배운 내용

```
알고리즘 문제 해결은 했지만, 이 수가 엄청 큰 수라면 시간이 엄청 오래걸릴 것 같다.
하나하나씩 비교가 아닌 다른 방법은 없을까...?
```

<br>

## 1-13 콜라츠 추측

<br>

![스크린샷 2022-09-27 오후 7 33 44](https://user-images.githubusercontent.com/39263149/192503570-52f47559-167e-4f3c-9b39-e8cfe0cc3810.png)

```javascript
function solution(num) {
  let result = num;
  for (let i = 0; i < 500; i++) {
    if (result % 2 === 0) {
      result = result / 2;
    } else if (result % 2 === 1 && result > 1) {
      result = result * 3 + 1;
    } else if (result === 1) {
      return i;
    }
  }
  return -1;
}
```

### 다른 사람의 풀이

```javascript
function solution(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
```

### 배운 내용

```
다른 사람의 풀이를 보니 나도 다 아는 내용인데 왜 이렇게는 생각하지 못했을까 하는 아쉬움이 남는다...

삼항 연산자를 JSX에서만이 아닌 js 코드에서도 자주 사용하려 생각을 해야겠다.
```

<br>

## 1-14 두 정수 사이의 합

<br>

![스크린샷 2022-09-27 오후 7 34 02](https://user-images.githubusercontent.com/39263149/192503573-5af93f64-bdcd-4603-8c95-4f7bac55dfdb.png)

```javascript
function solution(a, b) {
  const min = a < b ? a : b;
  const max = a < b ? b : a;
  let result = 0;
  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}
```

### 다른 사람의 풀이

```javascript
function adder(a, b) {
  var result = 0;
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
```

### 배운 내용

```
가우스의 법칙을 여기서 볼 줄은 몰랐다... 👍

그리고 min, max를 삼항 연산자가 아닌 Math.min(), Math.max() 로 풀 수 있었다.
```

<br>

## 1-15 서울에서 김서방 찾기

<br>

![스크린샷 2022-09-27 오후 7 39 54](https://user-images.githubusercontent.com/39263149/192504986-669472a8-8111-4bcb-9128-611439537710.png)

```javascript
function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}
```

<br>

## 1-16 핸드폰 번호 가리기

<br>

![스크린샷 2022-09-27 오후 7 40 06](https://user-images.githubusercontent.com/39263149/192504982-b114cd45-4df3-42db-9392-b789b2749723.png)

```javascript
function solution(phone_number) {
  return `${phone_number
    .slice(0, -4)
    .replace(/[0-9]/gi, "*")}${phone_number.slice(-4)}`;
}
```

### 다른 사람의 풀이

```javascript
function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);

  return result;
}
```

### 배운 내용

```
정규식으로 해결한 사람도 꽤 있는데, 아직 정규식에 익숙하지 않다. 시간을 내서 익혀두면 좋을 것 같다.
받아오는 '숫자를 *로 변환한다' 는 생각이 강했는데, 그냥 길이에서 4를 빼고 앞부분은 *로 채우고, 뒤에만 보여주는 방법도 좋은 것 같다.
```

<br>

## 1-17 나누어 떨어지는 숫자 배열

<br>

![스크린샷 2022-09-27 오후 7 40 19](https://user-images.githubusercontent.com/39263149/192504987-8c7d3ede-9a4f-4055-8dc4-86be096a5f1d.png)

```javascript
function solution(arr, divisor) {
  const newArr = arr
    .filter((item) => item % divisor === 0 && item)
    .sort((a, b) => a - b);
  return newArr.length > 0 ? newArr : [-1];
}
```

<br>

## 1-18 제일 작은 수 제거하기

<br>

![스크린샷 2022-09-27 오후 7 40 27](https://user-images.githubusercontent.com/39263149/192504991-5b5b3da2-1940-4795-95b4-d1fd45191aea.png)

```javascript
function solution(arr) {
  const newArr = arr.filter((value) => value !== Math.min(...arr));
  return newArr.length === 0 ? [-1] : newArr;
}
```

<br>

## 1-19 음양 더하기

<br>

![스크린샷 2022-09-27 오후 7 40 39](https://user-images.githubusercontent.com/39263149/192504993-e81d4622-458a-4ced-b2dd-1c6dde6bc242.png)

```javascript
function solution(absolutes, signs) {
  let result = 0;
  absolutes.map((absolute, idx) => {
    result += signs[idx] ? absolute : -absolute;
  });
  return result;
}
```

### 배운 내용

```
array.method() 보다 for 등의 loop 반복문의 성능이 훨씬 빠르다고 한다.
하지만 하드웨어의 성능 또한 상당히 발전되어서 100개 이상의 리스트를 돌리지 않는 이상 성능에서 큰 차이는 발생하지 않는 것 같다. (추측)
또한 브라우저마다 각각 처리속도의 차이가 있다.
```

[아래 글 참고](https://medium.com/@gabriellegianna92/loops-vs-array-methods-26999051ba45)

```
수행해야 할 작업에 따라 가장 명확한 접근 방식을 해라.

  1. 간단한 반복의 경우 for 루프 또는 모든 배열 메서드를 사용합니다.
  2. 같은 크기의 새 배열을 만들려면 map
  3. 데이터의 새로운 표현을 작성하려면 reduce를 사용하십시오.
  4. 하위 집합을 새 배열로 만들려면 필터를 사용하십시오.

결론적으로 for 루프는 사용하는 브라우저에 따라 더 빠를 수 있지만 가독성 때문에 가능한 모든 곳에서 배열 메서드를 사용해야 합니다.

약 1년차인 나로써는 성능도 물론 중요하지만, 상황에 맞게 결과를 내는대에 우선순위가 있다고 생각한다.
따라서 알고는 있으면 좋으나 상황에 맞게 적절한 코드를 적용하는게 좋을 것 같다고 생각한다.
```

<br>

## 1-20 수박수박수박수박수박수?

<br>

![스크린샷 2022-09-27 오후 7 40 48](https://user-images.githubusercontent.com/39263149/192504997-237f6a2d-9990-4dc8-b3fb-9b5dfabb0b27.png)

```javascript
function solution(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i % 2 === 1 ? "수" : "박";
  }
  return result;
}
```

### 다른 사람의 풀이

```javascript
const waterMelon = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};
```

### 배운 내용

```
String.prototype.repeat()
=> repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

위 다른 사람 풀이에서 'return문에 + 전까지' 보면 수박을 2의 배수일 경우 '수박', '수박수박' ... '수박수박....수박' 의 형태로 출력한다.
+ 이후의 코드에선 홀수일 경우 수를 추가한다. 이렇게하면 '수박수'와 같은 경우도 출력이 가능하다.
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

## 1-22 없는 숫자 더하기

<br>

![스크린샷 2022-09-27 오후 7 41 09](https://user-images.githubusercontent.com/39263149/192505001-97903c0e-b0f6-4dec-81aa-aa9388861261.png)

```javascript
function solution(numbers) {
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return tempArr
    .filter((item) => !numbers.includes(item))
    .reduce((pre, cur) => (pre += cur));
}
```

<br>

## 1-23 내적

<br>

![스크린샷 2022-09-28 오후 6 02 10](https://user-images.githubusercontent.com/39263149/192737493-b038a24e-0d43-4cd3-9a60-ba050398cefd.png)

```javascript
function solution(a, b) {
  return a.reduce((acc, _, idx) => (acc += a[idx] * b[idx]), 0);
}
```

<br>

## 1-24 문자열 내림차순으로 배치하기

<br>

![스크린샷 2022-09-30 오전 9 40 48](https://user-images.githubusercontent.com/39263149/193165868-34d81259-5e42-45b8-8cf4-1bb24fef1a9c.png)

```javascript
function solution(s) {
  return s.split("").sort().reverse().join("");
}
```

<br>

## 1-25 문자열 다루기 기본

<br>

![스크린샷 2022-10-01 오후 4 46 34](https://user-images.githubusercontent.com/39263149/193399002-dbd1ed29-a623-46d1-b6b3-fc4776054d0d.png)

```javascript
function solution(s) {
  return s.search(/\D/g) < 0 && (s.length === 4 || s.length === 6);
}
```

### 배운 내용

```
1. 문제 조건을 잘 읽어야한다.
  문제 설명에 '4 혹은 6' 이라는 걸 처음에 잘 읽었더라면 4 ~ 6 사이 조건으로 작성해서 틀리진 않았을 것이다.

2. 3e10 라는 지수 표현으로 숫자를 나타낼 수 있음.
  테스트 케이스에서 이와같은 예시가 나왔는데, 오류가 발생했다..
  그 이유는, 오류 시 [ isNaN(s) ? false : true ] 으로 값을 검사했기 때문이다.
  지수 표현으로 문자가 들어갔음에도 숫자로 표현이되어 오류가 났었다.
```

<br>

## 1-26 약수의 개수와 덧셈

<br>

![스크린샷 2022-10-01 오후 10 20 01](https://user-images.githubusercontent.com/39263149/193411486-2b54ad88-d0eb-4822-8d35-1bfafaed06bf.png)

```javascript
function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    let list = [];
    for (let j = 1; j <= i; j++) {
      i % j === 0 && list.push(j);
    }
    list.length % 2 === 0 ? (sum += i) : (sum -= i);
  }
  return sum;
}
```

### 다른 사람 풀이

```javascript
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
```

### 배운 내용

```
제곱근이 정수면 약수의 개수가 홀수다!!!

Math.sqrt(number) number의 제곱근을 구한다,
Number.isInteger() 그 값이 정수인지 아닌지 판별한다.
number의 제곱근이 정수라면 약수의 갯수가 홀수이다. 반대로
소수라면 약수의 갯수가 짝수이다.

나의 코드는 o^2 이므로 속도에서 배로 차이날 것이다.
하지만 한번에 해결했음에 알고리즘 실력이 점점 향상되고 있는게 느껴져서 좋다.
```

<br>

## 1-27 행렬의 덧셈

<br>

![스크린샷 2022-10-03 오후 9 39 52](https://user-images.githubusercontent.com/39263149/193578758-f4e63f8b-4696-4a9b-b83a-d820d75286a9.png)

```javascript
function solution(arr1, arr2) {
  return arr1.map((arr, idx1) =>
    arr.map((value, idx2) => value + arr2[idx1][idx2])
  );
}
```

<br>

## 1-28 부족한 금액 계산하기

<br>

![스크린샷 2022-10-04 오후 3 46 19](https://user-images.githubusercontent.com/39263149/193752291-8625eef8-4479-4d3d-a7ef-bc3664cd56a3.png)

```javascript
function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum > money ? sum - money : 0;
}
```

<br>

## 1-29 직사각형 별찍기

<br>

![스크린샷 2022-10-05 오후 6 08 41](https://user-images.githubusercontent.com/39263149/194024280-9d71be29-2c5f-4e8f-8448-10ae6fd2e035.png)

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
});
```

### 다른 사람 풀이

```javascript
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  const b = Number(n[1]);

  console.log(`${"*".repeat(a)} \n`.repeat(b));
});
```

### 배운 내용

```
당연하게도 이중 for문을 먼저 떠올렸고, repeat() 메소드는 생각조차 못했다.
학생때 경험으로 생각이 좁혀져 있었던 것 같다.

string.repeat( count ) 의 형태로 쓰이고, 문자열을 반복한 값을 반환하는 메서드이다.
```

<br>

## 1-30 최대공약수와 최소공배수

<br>

![스크린샷 2022-10-06 오후 5 47 59](https://user-images.githubusercontent.com/39263149/194266620-2723ceb9-2cfa-4130-9935-50f27b2da28c.png)

```javascript
function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}
```

### 배운 내용

```
유클리드 호제법

< 최대 공약수 >
if(n < m) 인 경우에, n % m = r 로 표현할 수 있다.
이때 r === 0 일 경우 m 이 '최대 공약수'가 된다.

< 최소 공배수 >
[ n * m / 최대 공약수 ] 를 계산하면 최소 공배수를 구할 수 있다.
```

<br>

## 1-31 같은 숫자는 싫어

<br>

![스크린샷 2022-10-07 오후 5 43 46](https://user-images.githubusercontent.com/39263149/194512341-3ac5ed49-128f-41e0-aef9-b64aec33c2a5.png)

```javascript
function solution(arr) {
  return arr.filter((value, idx) => value != arr[idx + 1]);
}
```

<br>

## 1-32 이상한 문자 만들기

<br>

![스크린샷 2022-10-08 오후 1 35 58](https://user-images.githubusercontent.com/39263149/194688486-0657bfce-84e2-483b-bcbf-f8cb1ac3c94e.png)

```javascript
function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, idx) =>
          idx % 2 !== 0 ? word[idx].toLowerCase() : word[idx].toUpperCase()
        )
        .join("")
    )
    .join(" ");
}
```

### 배운 내용

```
map을 처음 돌린 후 나온 값이 배열이 아닌 문자라서 for문을 돌리려고 했다. => for(let i=0; i<word.length;i++) {...}
word 값에 split() 을 한번 더 사용해서 배열의 고차함수를 이용했다.

나뉜 문자는 다시 join() 을 통해 묶어줬다.

=> split(), join() 을 바로 떠올리지 못한게 아쉽다..
```

<br>

## 1-33 3진법 뒤집기

<br>

![스크린샷 2022-10-09 오후 11 29 32](https://user-images.githubusercontent.com/39263149/194762465-fb747b3d-dfae-4567-b956-fb2070248002.png)

```javascript
function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}
```

<br>

## 1-34 예산

<br>

![스크린샷 2022-10-10 오후 2 03 15](https://user-images.githubusercontent.com/39263149/194801744-5ee27f96-4508-4153-acea-a2e681925ccf.png)

```javascript
function solution(d, budget) {
  let sum = 0;
  const answer = d
    .sort((a, b) => a - b)
    .filter((list, idx) => {
      sum += list;
      if (sum <= budget) {
        return list;
      }
    });
  return answer.length;
}
```

### 다른 사람 풀이

```javascript
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}
```

<br>

## 1-35 시저암호

<br>

![스크린샷 2022-10-11 오후 5 33 18](https://user-images.githubusercontent.com/39263149/195058180-732b36c5-0a06-47fa-90e9-ec43430f4d29.png)

```javascript
function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      const unicode = char.charCodeAt(0);
      if ((unicode + n > 90 && unicode <= 90) || unicode + n > 122) {
        return String.fromCharCode(unicode + n - 26);
      } else {
        return String.fromCharCode(unicode + n);
      }
    })
    .join("");
}
```

### 배운 내용

```
해결하는데 1시간 넘게 걸릴 것 같다...
문제가 되었던 내용을 적어놓자면
1. unicode를 잘 알지 못했다.
-> 유니코드가 너무 햇갈려서 조건에 들어가야할 숫자를 잘못넣었다.
=> String.fromCharCode(value) 를 통해서 A a Z z 를 찾으므로 해결되었다.

2. 1과 비슷한 문제인데, 유니코드상에서 Z 와 a 사이에 다른 값이 없는줄 알았다
=> 처음부터 A Z a z 를 찾아놨어야한다...

3. Z -> A로 z -> a 로 변환
-> 처음엔 Z 에서 A로 변환하기 위해서 map 내에서 char 값이 === 'Z' 라면 65 + n 이라는 멍청한 생각으로 해결하려 했다.
-> 위 생각에서의 문제는 n 값이 더해지면 Z 이상으로 넘어가 버린다....
=> 결국 모든 조건을 생각해서 결과를 내주었다.
=> A(65) ~ Z(90) 사이에 들어간 값인데, n을 더해서 90보다 커졌다면, (처음 생각한 잘못된 생각 = A부터 더해주어야 한다)이 아닌 90 + n 값에서 - 26(알파벳 갯수)를 빼주면 된다.
=> 소문자에서도 a(97) ~ z(122) 동일하게 체크해주었다.
=> 소문자에서 unicode <= 122를 하지 않아도 되는 이유는, 조건에서 s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있기 때문이다. ( + 조건하에 unicode 값이 90이상은 소문자 뿐이다)
```

<br>

## 1-36 비밀지도 (kakao-2018)

<br>

![스크린샷 2022-10-12 오후 5 10 13](https://user-images.githubusercontent.com/39263149/195287554-c57076e8-f834-4d2c-b73b-a32304aa6918.png)
![스크린샷 2022-10-12 오후 5 10 38](https://user-images.githubusercontent.com/39263149/195287546-645e8d8f-d11c-48ac-8939-36647b5645dd.png)
![스크린샷 2022-10-12 오후 5 10 48](https://user-images.githubusercontent.com/39263149/195287542-5c577848-9f76-4c57-8116-df5b84fce19e.png)

## [2018 카카오 시입 공채 1차 코딩 테스트 문제 해설](https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/)

```javascript
function solution(n, arr1, arr2) {
  const newArr1 = arr1.map((value) => value.toString(2).padStart(n, "0"));
  const newArr2 = arr2.map((value) => value.toString(2).padStart(n, "0"));

  let answer = [];
  for (let i = 0; i < newArr1.length; i++) {
    let totalArr = [];
    for (let j = 0; j < newArr2.length; j++) {
      if (newArr1[i][j] === "0" && newArr2[i][j] === "0") {
        totalArr.push("0");
      } else {
        totalArr.push("1");
      }
    }
    answer.push(totalArr.join(""));
  }
  return answer.map((value) => value.replaceAll("1", "#").replaceAll("0", " "));
}
```

### 다른 사람 풀이

```javascript
var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i])
      .toString(2)
      .padStart(n, 0)
      .replaceAll("0", " ")
      .replaceAll("1", "#")
  );
```

### 배운 내용

```
비트 연산자에 대해 배울 수 있었다.

내 풀이에서 `newArr1과 newArr2, 이 두 배열을 어떻게 합쳐야 할지` 를 풀어가는 과정에서 차이가 있었다고 생각한다.

한 달 정도 혼자서 알고리즘을 풀고 카카오 공채 (물론 그해에 가장 쉬운 문제였다) 문제를 해결했음에
아직 많이 부족하지만 뿌듯함과 보람을 느낀다.
```

<br>

## 1-37 최소직사각형

<br>

![스크린샷 2022-10-13 오후 5 29 14](https://user-images.githubusercontent.com/39263149/195544508-b122f12e-9350-4b3c-8a11-43eaa1913aec.png)

```javascript
function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.forEach((size) => {
    const [a, b] = size.sort((a, b) => b - a);
    if (a > width) width = a;
    if (b > height) height = b;
  });
  return width * height;
}
```

<br>

## 1-38 문자열 내 마음대로 정렬하기

<br>

![스크린샷 2022-10-14 오후 5 54 36](https://user-images.githubusercontent.com/39263149/195806038-9dd1153c-757a-4116-8f35-8e0368e7b824.png)

```javascript
function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] === b[n]) return a > b ? 1 : -1;
    else return -1;
  });
}
```

<br>

## 1-39 K번째수

<br>

![스크린샷 2022-10-15 오전 11 25 31](https://user-images.githubusercontent.com/39263149/195964951-58148293-3b59-4520-aef7-30b98ab48c15.png)

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

## 1-40 숫자 문자열과 영단어

<br>

![스크린샷 2022-10-15 오후 2 24 23](https://user-images.githubusercontent.com/39263149/195970408-83ac4fdd-a75d-4203-a585-86fb904d8942.png)
![스크린샷 2022-10-15 오후 2 24 34](https://user-images.githubusercontent.com/39263149/195970406-56918893-7329-4662-a410-5c3afaa891de.png)

### 풀이 1

```javascript
function solution(s) {
  s = s.match(/zero|one|two|three|four|five|six|seven|eight|nine+|[0-9]/g);
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  return Number(s.map((x) => (obj[x] === undefined ? x : obj[x])).join(""));
}
```

### 풀이 2

```javascript
function solution(s) {
  let numbers = [
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
  return Number(s);
}
```

<br>

## 1-41 두 개 뽑아서 더하기

<br>

![스크린샷 2022-10-17 오후 3 42 25](https://user-images.githubusercontent.com/39263149/196106729-f4e33133-c7e7-4a15-8895-a8a6353837ea.png)

```javascript
function solution(numbers) {
  let sum = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      sum.push(numbers[i] + numbers[j]);
    }
  }
  return sum
    .filter((element, i) => sum.indexOf(element) === i)
    .sort((a, b) => a - b);
}
```

### 배운 내용

```
배열 내 중복값 제거하는 방법
array.filter((element,index) => array.indexOf(element) === i)

기존 배열 array 메소드에 indexOf()를 사용해서 배열 내의 값을 넣는다 (element)
동일한 값이 있다면 동일한 index 값이 나온다
따라서 그 중복값이 제거된다.
```

<br>

## 1-42 2016년

<br>

![스크린샷 2022-10-18 오후 10 05 30](https://user-images.githubusercontent.com/39263149/196438915-46e080c2-65ab-4465-8237-21e71b258672.png)

```javascript
function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const today = new Date(2016, a - 1, b);
  return day[today.getDay()];
}
```

### 배운 내용

```
내가 쓴 코드에 today.toString() 하면 ue 'May 24 2016 00:00:00 GMT+0900 (대한민국 표준시)' 라는 값을 얻을 수 있다.
이를 통해 조금 더 짧게 풀 수 있었다.
```

<br>

## 1-43 포켓몬

<br>

![스크린샷 2022-10-19 오후 5 30 45](https://user-images.githubusercontent.com/39263149/196639166-f5aa5871-71e6-4ddf-be68-1c35d8d0ebf1.png)

```javascript
function solution(nums) {
  const numsLength = nums.length;
  const setLength = [...new Set(nums)].length;
  return setLength > numsLength / 2 ? numsLength / 2 : setLength;
}
```

<br>

## 1-44 소수 찾기

<br>

### 다시 풀어보기

![스크린샷 2022-10-20 오후 4 39 49](https://user-images.githubusercontent.com/39263149/196886691-f0a1ec88-344b-4aa6-b254-f0e3d075be14.png)

```javascript
function solution(n) {
  let answer = 0;
  function isPrime(num) {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    answer += 1;
  }
  for (let num = 2; num <= n; num++) {
    isPrime(num);
  }
  return answer;
}
```

<br>

## 1-45 모의고사

<br>

![스크린샷 2022-10-21 오후 12 10 35](https://user-images.githubusercontent.com/39263149/197102572-ac32dfec-dff9-4634-8aff-75cf4096bab3.png)

```javascript
function solution(answers) {
  const answer = [];
  const n1 = "12345".repeat(Math.ceil(answers.length / 5)).split("");
  const n2 = "21232425".repeat(Math.ceil(answers.length / 8)).split("");
  const n3 = "3311224455".repeat(Math.ceil(answers.length / 10)).split("");
  const points = [];

  points.push(n1.filter((answer, idx) => +answer === answers[idx]).length);
  points.push(n2.filter((answer, idx) => +answer === answers[idx]).length);
  points.push(n3.filter((answer, idx) => +answer === answers[idx]).length);

  const maxPoint = Math.max(...points);
  for (let i = 0; i < 3; i++) {
    if (points[i] === maxPoint) answer.push(i + 1);
  }
  return answer;
}
```

### 다른 사람 풀이

```javascript
function solution(answers) {
  const answer = [];
  const firstPattern = [1, 2, 3, 4, 5];
  const firstPLength = firstPattern.length;
  const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  const secondPLength = secondPattern.length;
  const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const thirdLength = thirdPattern.length;
  let correctCount = [0, 0, 0];

  for (let i = 0, len = answers.length; i < len; i++) {
    if (answers[i] === firstPattern[i % firstPLength]) correctCount[0] += 1;
    if (answers[i] === secondPattern[i % secondPLength]) correctCount[1] += 1;
    if (answers[i] === thirdPattern[i % thirdLength]) correctCount[2] += 1;
  }

  const maxScore = Math.max(...correctCount);
  for (let i = 0; i < 3; i++) {
    if (correctCount[i] === maxScore) answer.push(i + 1);
  }

  return answer;
}
```

### 정리

```
입력받은 answers 길이에따라 n1,n2,n3 사람이 찍을 정답의 길이를 늘려줘야한다고 생각했다.
repeat이 생각났고 repeat으로 해주었다. 하지만, 정확한 길이와 맞지않아 배열을 몇번 더 돌아야 하니 메모리에 누수가 있을 것이다.

points.push 부분까지해서 금방 해결할 수 있었다. 문제는 받은 값을 활용하는 부분에서 막혔는데 최대값 구하는 부분까지 해놓고 처음엔 어떻게 활용할지 생각이 막혀있었다.

쉽게 생각해보면 결국 최고점을 받은 사람을 찾는것이니, Math.max()로 최고 점수를 구하고, 그 점수와 같은 사람만 찾으면 되는 문제였다. ( 이 부분에서 조금 헤매었다. )
```

### 배운 내용

```
array[ i % length ] 값을 늘려야하는 생각보다, 그 값 내에서 활용하는 생각을 했다는거에 많이 배웠다.
```

<br>

## 1-46 소수 만들기

<br>

![스크린샷 2022-10-22 오후 4 56 18](https://user-images.githubusercontent.com/39263149/197327826-c27608b1-39fe-47d1-b2d4-2607097cafe7.png)

```javascript
function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    answer += 1;
  }
  return answer;
}
```

### 배운 내용

```
n개 중 x개 뽑기 문제가 나오면 고민하지 말고 반복문을 뽑는 수만큼 돌려라
단순하고 심플한 방법인 것 같다.
```

<br>

## 1-47 실패율

<br>

![스크린샷 2022-10-24 오후 4 42 24](https://user-images.githubusercontent.com/39263149/197473524-7f4211dc-1327-486a-b0a5-5b419d408ed5.png)
![스크린샷 2022-10-24 오후 4 42 34](https://user-images.githubusercontent.com/39263149/197473514-8a025e1f-a251-4376-a4ac-42a2ce5f5b34.png)

```javascript
function solution(N, stages) {
  const failRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player === stage).length;
    const playerChallenging = stages.filter((player) => player >= stage).length;
    failRate.push([stage, playerReached / playerChallenging]);
  }
  failRate.sort((a, b) => b[1] - a[1]);
  return failRate.map((stage) => stage[0]);
}
```

### 배운 내용

```
1. filter
  player === stage 를 통해 현재 stage에 있는 player의 수를 구한다.
  player >= stage 를 통해 도전중인 player의 수를 구한다.

2. Array
  배열의 0번째 index 값에 stage에 대한 값을 넣는다.
  배열의 1번째 index 값에 실패율에 대한 값을 넣는다.
  1번째 값으로 정렬을하고, 0번째 값을 return 한다.
```

<br>

## 1-48 다트 게임

<br>

![스크린샷 2022-10-26 오후 7 59 26](https://user-images.githubusercontent.com/39263149/198009535-b8c0f026-e85c-46b8-a303-13c29b3f1f9e.png)
![스크린샷 2022-10-26 오후 7 59 37](https://user-images.githubusercontent.com/39263149/198009523-d0d88a0a-547a-4232-878d-c8d4ef3bc5f8.png)

```javascript
function solution(dartResult) {
  const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
  let result = [];
  for (const dart of dartResult.match(regex)) {
    const game = [...dart.split(/([SDT]{1})/)];
    const score = game[0];
    let bonus = 1;
    let option = 1;
    if (game[1] === "S") bonus = 1;
    if (game[1] === "D") bonus = 2;
    if (game[1] === "T") bonus = 3;

    if (game[2] === "*") {
      if (result.length !== 0) result[result.length - 1] *= 2;
      option = 2;
    }
    if (game[2] === "#") option = -1;

    result.push(score ** bonus * option);
  }

  return result.reduce((a, b) => a + b);
}
```

<br>
<br>

# 2단계 문제

<br>

## 2-1 최대값과 최솟값

<br>

![스크린샷 2022-09-29 오후 4 20 26](https://user-images.githubusercontent.com/39263149/192966073-7afc0d47-3f81-4a9a-86a0-30d0bb48d2d0.png)

```javascript
function solution(s) {
  const min = Math.min(...s.split(" ").map((value) => +value));
  const max = Math.max(...s.split(" ").map((value) => +value));

  return `${min} ${max}`;
}
```

### 다른 사람의 풀이

```javascript
function solution(s) {
  const arr = s.split(" ");

  return Math.min(...arr) + " " + Math.max(...arr);
}
```

### 배운 내용

```
Math.max(), Math.min()이 문자열도 비교 가능하다는 사실을 알았다.
형 변환을 할 필요가 없는 문제였다.
```

<br>

## 2-2 Jaden Case 문자열 만들기

<br>

![스크린샷 2022-10-23 오후 1 52 55](https://user-images.githubusercontent.com/39263149/197374471-bfd28855-24f6-4a77-975a-998f46405212.png)

```javascript
function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((string) => string.replace(/^[a-z]/, (char) => char.toUpperCase()))
    .join(" ");
}
```

<br>

## 2-3 최솟값 만들기

<br>

![스크린샷 2022-10-25 오후 6 26 58](https://user-images.githubusercontent.com/39263149/197737230-10772dbb-ddf1-4f35-b133-64f108a5b1b1.png)

```javascript
function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (let i = 0; i < A.length; i++) answer += A[i] * B[i];
  return answer;
}
```

## 다른 풀이

```javascript
function solution(A, B) {
  let result = 0;
  const answer = A.sort((a, b) => a - b).map((AMin) => {
    let BMax = Math.max(...B);
    B.splice(B.indexOf(BMax), 1, "-1");
    return AMin * BMax;
  });

  answer.map((x) => (result += x));
  return result;
}
```

```
효용성 테스트가 있는지 모르고 고차함수를 사용했다가 막히고 말았다.
그냥 for문 돌려서 해결했다.
```
