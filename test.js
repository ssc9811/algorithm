const [[n], ...dots] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => x));

let company = new Map(dots.map((el) => [el[0], el[1]]));
const result = [];

for (let key of company.keys()) {
  if (company.get(key) !== "leave") result.push(key);
}

result.sort().reverse();

console.log(result.join(" "));
