const food = [1, 7, 1, 2];

// 물 1개
// 1칼로리 3개
// 2칼로리 4개
// 3칼로리 6개

function solution(food) {
  const answer = [];
  food.map((element, idx) => {
    let item = Math.floor(element / 2);
    if (idx !== 0) {
      while (item > 0) {
        answer.push(idx);
        item--;
      }
    }
  });
  return answer.join("") + 0 + answer.reverse().join("");
}
solution(food);

function solution(food) {
  const answer = [];
  food.map((element, idx) => {
    let item = Math.floor(element / 2);
    if (idx !== 0) {
      while (item > 0) {
        answer.push(idx);
        item--;
      }
    }
  });
  let answerR = [...answer];
  answerR = answerR.reverse();
  return [...answer, 0, ...answerR].join("");
}
