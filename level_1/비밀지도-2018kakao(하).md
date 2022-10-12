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
