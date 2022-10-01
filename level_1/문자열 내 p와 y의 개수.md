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
