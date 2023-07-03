<img width="1042" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/c0684051-27f7-469e-a1e6-ed9b4bb5bdc9">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a * b);
```
