<img width="1047" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/cf37ad30-c26b-4c6a-a01d-d4ec5661dd3f">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a - b);
```
