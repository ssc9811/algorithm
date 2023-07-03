![image](https://github.com/ssc9811/algorithm/assets/39263149/9c9b8bd6-7e7f-425e-af9a-5dbd52fcef2d)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputs.length; i++) {
  const numbers = inputs[i].split(" ");
  console.log(+numbers[0] + +numbers[1]);
}
```
