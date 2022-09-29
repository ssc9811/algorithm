const s1 = "1 2 3 4";
const s2 = "-1 -2 -3 -4";



const min = Math.min(...s2.split(' ').map(value => +value))
const max = Math.max(...s2.split(' ').map(value => +value))

const arr = s1.split(' ');
console.log(Math.max(...arr))

return `${min} ${max}`
