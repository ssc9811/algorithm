const input = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .toLowerCase()
  .trim()
  .split("")
  .sort();

const obj = {};

input.forEach((item) => {
  if (obj[item]) {
    obj[item] += 1;
  } else {
    obj[item] = 1;
  }
});

const maxCount = Math.max(...Object.values(obj));
console.log(
  Object.values(obj).filter((item) => item === maxCount).length > 1
    ? "?"
    : Object.keys(obj)
        .find((key) => obj[key] === maxCount)
        .toUpperCase()
);
