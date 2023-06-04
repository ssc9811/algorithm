const N = +require("fs").readFileSync("./baekjoon_input.txt").toString().trim();

let range = 1;
let block = 1;

while (block < N) {
  block += 6 * range;
  range++;
}

console.log(range);
