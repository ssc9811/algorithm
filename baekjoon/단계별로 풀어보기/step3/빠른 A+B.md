![image](https://github.com/ssc9811/algorithm/assets/39263149/b4f1149c-6fae-4e1e-8e30-818a865f0033)
![image](https://github.com/ssc9811/algorithm/assets/39263149/c7324457-9905-4368-a032-5c5141480577)

```javascript
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  answer +=
    i === 1
      ? `${Number(numbers[0]) + Number(numbers[1])}`
      : `\n${Number(numbers[0]) + Number(numbers[1])}`;
}

console.log(answer);
```
