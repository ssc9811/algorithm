const [[n, m], ...example] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((v) => +v));

let basket = [];

for (let i = 1; i <= n; i++) {
  basket.push(i);
}

for (let [i, j] of example) {
  for (let idx = i; idx <= (i + j) / 2; idx++) {
    console.log(idx);
    let bak = basket[idx];
    basket[idx] = basket[j - idx + i];
    basket[j - idx + i] = bak;
  }
}
console.log(basket.join(" "));
