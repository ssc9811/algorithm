let num = +require("fs").readFileSync("./baekjoon_input.txt").toString().trim();
let title = 665;

while (num > 0) {
  title++;
  if (String(title).includes("666")) {
    num--;
  }
}

console.log(title);
