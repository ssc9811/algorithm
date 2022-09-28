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

### 배운점

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

### 느낀점

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

### 느낀점

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

### 느낀점

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

### 느낀점

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

### 느낀점

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

### 느낀점

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

### 느낀점

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

### 느낀점

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
