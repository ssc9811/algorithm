const numbers = [2, 1, 3, 4, 1];

numbers.filter((element, i) => console.log(numbers.indexOf(element)));

// function solution(numbers) {
//   let sum = [];
//   for (let i = 0; i <= numbers.length - 1; i++) {
//     for (let j = i + 1; j <= numbers.length - 1; j++) {
//       sum.push(numbers[i] + numbers[j]);
//     }
//   }
//   return sum
//     .filter((element, i) => sum.indexOf(element) === i)
//     .sort((a, b) => a - b);
// }
// solution(numbers);
