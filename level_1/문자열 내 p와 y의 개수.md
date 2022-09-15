## 문자열 내 p와 y의 개수

### 문제 설명

```
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요.
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
```

### 제한 조건

- 문자열 s의 길이 : 50 이하의 자연수
- 문자열 s는 알파벳으로만 이루어져 있습니다.

### 입출력 예

| s         | answer |
| --------- | ------ |
| "pPoooyY" | true   |
| "Pyy"     | false  |

### 내 풀이 코드

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
