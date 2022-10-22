const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 7, 6, 4];

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  function isPrime(num) {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    answer += 1;
  }
  return answer;
}

solution(arr1);
