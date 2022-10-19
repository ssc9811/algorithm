const num1 = [3, 1, 2, 3];
const num2 = [3, 3, 3, 2, 2, 4];
const num3 = [3, 3, 3, 2, 2, 2];
const num4 = [2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5];

// function solution(nums) {
//   const newNums = [...new Set(nums)];
//   let sum = 1;
//   for (let i = newNums.length; i >= 1; i--) {
//     sum *= i;
//   }
//   console.log(nums.length / 2 < sum ? nums.length / 2 : sum);
// }

function solution(nums) {
  const numLen = nums.length;
  const setLen = [...new Set(nums)].length;
  console.log(setLen);
  console.log(numLen / 2 >= setLen ? setLen : numLen / 2);
}

solution(num4);
