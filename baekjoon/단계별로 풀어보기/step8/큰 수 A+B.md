![image](https://github.com/ssc9811/algorithm/assets/39263149/49596520-0e1d-41da-9001-2f3bcecda56d)

```javascript
const [A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => v);

const answer = BigInt(A) + BigInt(B);
console.log(answer.toString());
```
