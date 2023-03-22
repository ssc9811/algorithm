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

### 과거 내 코드

![image](https://user-images.githubusercontent.com/39263149/226888249-7030feb2-cbde-407e-8971-76ff256eaee8.png)

### 느낀점

```
푼 방식은 비슷한거 같다.
어떻게 풀었었는지 기억은 안나더라도, 내 생각내에서 풀어냈던 결과라 비슷한 것 같다.

다만 다른 사람이 푼 코드는 이번에도 보고 놀랐다는게 기분이 좋진 않다... ㅎㅎ 반성해야겠다
(+ toUpperCase는 문자열에 바로 사용해도 된다)
```
