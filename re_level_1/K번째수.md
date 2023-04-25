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
