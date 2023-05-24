<img width="1045" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/74ad9c05-f5bc-4436-b155-3d6dbd7b77c7">

```javascript
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((v) => +v);

const [a, b] = inputs;
console.log(a / b);
```
