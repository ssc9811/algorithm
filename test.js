let n = require("fs").readFileSync("./baekjoon_input.txt").toString().trim();
let num = BigInt(n);

console.log(`${(num * (num - BigInt(1)) * (num - BigInt(2))) / BigInt(6)}`);
console.log(3);
