let S = require("fs").readFileSync("./baekjoon_input.txt").toString().trim();

const regExp = /<[a-z\s]+>|[a-z0-9]+/g;

console.log(
  S.replace(regExp, (word) =>
    word.startsWith("<") ? word : word.split("").reverse().join("")
  )
);
