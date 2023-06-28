const [[n], ...nums] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => x));

const [a1, a2] = nums;

const setA1 = new Set([...a1]);
const setA2 = new Set([...a2]);

const set = new Set([...a1.concat(a2)]);

setA1.forEach((item) => {
  if (setA2.has(item)) set.delete(item);
});

console.log(set.size);
