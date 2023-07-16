let [[n], [...nums]] = require("fs")
  .readFileSync("./test_input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((t) => t.split(" ").map((a) => +a));

let tmp = [];
let result = new Array(nums.length).fill(-1);

for (let i = 0; i < n; i++) {
  while (tmp.length && nums[tmp[tmp.length - 1]] < nums[i]) {
    result[tmp.pop()] = nums[i];
  }
  tmp.push(i);
}
console.log(result.join(" "));
