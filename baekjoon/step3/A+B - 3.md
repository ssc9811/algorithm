![image](https://github.com/ssc9811/algorithm/assets/39263149/5ba4bb73-1db5-4d14-b59d-72d61e21b835)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  console.log(+numbers[0] + +numbers[1]);
}
```
