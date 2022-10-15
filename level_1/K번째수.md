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
