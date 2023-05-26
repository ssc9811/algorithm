![image](https://github.com/ssc9811/algorithm/assets/39263149/010aa0b3-885a-40ed-9752-53ff5c5a06da)

```javascript
const inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < inputs.length - 1; i++) {
  const numbers = inputs[i].split(" ");
  console.log(+numbers[0] + +numbers[1]);
}
```
