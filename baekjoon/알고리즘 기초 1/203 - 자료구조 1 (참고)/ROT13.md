![image](https://github.com/ssc9811/algorithm/assets/39263149/ce51f7f5-9dcc-40c7-b694-56543fe52f8c)

```javascript
const inputs = require("fs").readFileSync("/dev/stdin").toString().split("");

const isEnglish = /[a-zA-Z]/;
let answer = "";

for (input of inputs) {
  if (isEnglish.test(input)) {
    const unicode = input.charCodeAt();
    if ((unicode + 13 > 90 && unicode <= 90) || unicode + 13 > 122) {
      answer += String.fromCharCode(unicode - 13);
    } else {
      answer += String.fromCharCode(unicode + 13);
    }
  } else {
    answer += input;
  }
}

console.log(answer);
```
