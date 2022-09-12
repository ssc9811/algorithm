const arr = [1, 2, 3, 4, 5]

function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0)
}

console.log(solution(arr) / arr.length);