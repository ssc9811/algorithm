const arr1 = [[1, 2], [2, 3]]
const arr2 = [[3, 4], [5, 6]]

const newArr1 = arr1.flat()
const newArr2 = arr2.flat()

let sum = 0;
newArr1.map((list, idx) => {
  sum += list + newArr2[idx]
})

console.log(sum)