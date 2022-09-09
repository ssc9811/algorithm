const arr = [1, 2, 3, 4, 5]

const result = arr.reduce((acc, crr, idx, arr) => {
  // console.log('acc', acc)
  // console.log('crr', crr)
  // console.log(acc += crr)
  console.log('idx', idx);
  console.log('arr', arr);
  return acc += crr;
}, 0
)
console.log(result)
