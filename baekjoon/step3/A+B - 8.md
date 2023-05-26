![image](https://github.com/ssc9811/algorithm/assets/39263149/bf04e04f-1ac5-4198-aa3b-1017a87a04eb)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(
    `Case #${i}: ${+numbers[0]} + ${+numbers[1]} = ${+numbers[0] + +numbers[1]}`
  );
}
```
