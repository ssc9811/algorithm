<img width="1040" alt="image" src="https://github.com/ssc9811/algorithm/assets/39263149/46281c78-1776-4e01-a7d5-19b653bfcea3">

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, item] = inputs;
const max = n.split(" ")[1];
console.log(
  item
    .split(" ")
    .filter((item) => +item < +max)
    .join(" ")
);
```
