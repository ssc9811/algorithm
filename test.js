const s = "one4seveneight";

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  numbers.map((number, i) => (s = s.split(number).join(i)));
  return Number(s);
}
solution(s);

// function solution(s) {
//   s = s.match(/zero|one|two|three|four|five|six|seven|eight|nine+|[0-9]/g);
//   const obj = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };
//   return Number(s.map((x) => (obj[x] === undefined ? x : obj[x])).join(""));
// }
