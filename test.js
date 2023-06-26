const [n, dots] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((x) => x));

const set = new Set(dots);
const uniq = [...set].sort((a, b) => a - b);

let dic = {};
uniq.forEach((e, i) => {
  dic[e] = i;
});

let answer = "";
for (let i = 0; i < dots.length; i++) {
  answer += dic[dots[i]] + " ";
}

console.log(answer);

// const sorted = dots.sort((a, b) => a.dot - b.dot);

// console.log(sorted);

// const newObj = sorted.map((item, index) => {
//   if (index === 0) {
//     min = item.dot;
//   }
//   if (item[1] === min) {
//     return {item.i, count};
//   } else {
//     count++;
//     min = item.dot;
//     return [item.i, count];
//   }
// });

// console.log("newObj", newObj);

// console.log(
//   newArray
//     .sort((a, b) => a[0] - b[0])
//     .map((item) => item[1])
//     .join(" ")
// );
