![image](https://github.com/ssc9811/algorithm/assets/39263149/e2dcef21-689f-4465-9c91-6b1326a3bc6a)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(`Case #${i}: ${+numbers[0] + +numbers[1]}`);
}
```
