const a1 = 10
const a2 = 12
const a3 = 11


return (a1 % (a1.toString().split('').reduce((prv, cur) => prv += +cur, 0))) === 0