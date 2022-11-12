const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];

// function solution(n, words) {
//   const leave = [];
//   const answer = [];
//   words.forEach((word, index) => {
//     if (leave.includes(word)) {
//       answer.push((index % n) + 1, Math.ceil(index / n));
//     } else if (index > 0 && words[index - 1].slice(-1) !== word.slice(0, 1)) {
//       answer.push((index % n) + 1, Math.ceil((index + 1) / n));
//     }
//     leave.push(word);
//   });
//   return answer.length > 0 ? answer : [0, 0];
// }
// console.log(word.slice(-1));
// console.log(word.slice(0, 1));

function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    let pass =
      words[i].slice(0, 1) === words[i - 1].slice(-1) &&
      !words.slice(0, i).includes(words[i]);
    if (!pass) return [(i % n) + 1, Math.ceil((i + 1) / n)];
  }
  return [0, 0];
}

solution(n, words);
