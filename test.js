const absolutes = [4, 7, 12]
const signs = [true, false, true]
let result = 0
absolutes.map((absolute, idx) => {
  result += signs[idx] ? absolute : -absolute
})

console.log(result)