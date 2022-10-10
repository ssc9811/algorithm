const d = [1, 3, 2, 5, 4];
const budget = 9;
// result = 3

// function solution(d, budget) {
//   d.reduce((pre, cur) => {
//     pre += cur;
//     console.log("sum", pre);
//     if (pre <= budget) {
//       // console.log(cur);
//       return cur;
//     }
//   }, 0);
// }

// function solution(d, budget) {
//   let sum = 0;
//   const answer = d
//     .sort((a, b) => a - b)
//     .filter((list, idx) => {
//       sum += list;
//       if (sum <= budget) {
//         return list;
//       }
//     });
//   return answer.length;
// }

var solution = (d, budget) => {
  console.log(
    d
      .sort((a, b) => a - b)
      .reduce((count, price) => {
        // return count + ((budget -= price) >= 0);
        return (count += (budget -= price) >= 0);
      }, 0)
  );
};

solution(d, budget);
