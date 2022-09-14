
// 118372	873211
const number = 118372;



console.log(+(number.toString()
  .split("")
  .sort((a, b) => b - a)
  .join('')
)
)

