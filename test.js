const lists = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((t) => +t));

// 0 제거
lists.pop();

lists.map((list) => {
  const [A, B] = list;
  if (A % B === 0) {
    console.log("multiple");
  } else if (B % A === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
});
