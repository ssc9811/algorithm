const [[N, M], ...example] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((v) => +v));

const baskets = Array.from({ length: N }, (v, i) => i + 1);

example.forEach((item) => {
  const [i, j] = item;
  const arr = [];
  for (let k = i - 1; k < j; k++) {
    arr.push(baskets[k]);
  }
  arr.reverse();
  baskets.splice(i - 1, j - i + 1, ...arr);
});
console.log(baskets.join(" "));
