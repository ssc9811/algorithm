let word = require("fs").readFileSync("./baekjoon_input.txt").toString().trim();

const alphabets = Array.from({ length: 26 }).map((_, i) =>
  String.fromCharCode(i + 97)
);

let answer = "";
for (let alphabet of alphabets) {
  let search = alphabet;
  let count = 0;
  let idx = word.indexOf(search);

  while (idx != -1) {
    count++;
    idx = word.indexOf(search, idx + 1);
  }
  answer += `${count} `;
}
console.log(answer);
