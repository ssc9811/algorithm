const a = [1, 2, 3, 4]
const b = [-3, -1, 0, 2]


const t = a.reduce((acc, _, idx) => {
  acc += a[idx] * b[idx]
    , 0
})


