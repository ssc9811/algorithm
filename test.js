const arr = [2, 36, 1, 3]
const divisor = 1

const newArr = arr.filter(x => x % divisor === 0 && x).sort((a, b) => a - b)

console.log(newArr)