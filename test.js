const arr1 = [1, 1, 3, 3, 0, 1, 1];
// const arr1 = [4, 4, 4, 3, 3];

const result = arr.filter((value, idx) => value != arr[idx + 1]);
console.log(result);
