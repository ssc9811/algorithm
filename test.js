let input = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map((t) => +t);

// let tmp = [];
const count = {};
let result = new Array(input.length).fill(-1);

input.forEach((x) => {
  count[x] = count[x] ? count[x] + 1 : 1;
});

const stack = [];

for (let i = 0; i < input.length; i++) {
  while (
    stack.length &&
    count[input[stack[stack.length - 1]]] < count[input[i]]
  ) {
    result[stack.pop()] = input[i];
  }
  stack.push(i);
}
console.log(result.join(" "));
