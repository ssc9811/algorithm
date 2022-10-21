const answers = [1, 3, 2, 4, 2];

function solution(answers) {
  const answer = [];
  const n1 = "12345".repeat(Math.ceil(answers.length / 5)).split("");
  const n2 = "21232425".repeat(Math.ceil(answers.length / 8)).split("");
  const n3 = "3311224455".repeat(Math.ceil(answers.length / 10)).split("");
  const result = [];

  result.push(n1.filter((answer, idx) => +answer === answers[idx]).length);
  result.push(n2.filter((answer, idx) => +answer === answers[idx]).length);
  result.push(n3.filter((answer, idx) => +answer === answers[idx]).length);

  const maxScore = Math.max(...result);
  for (let i = 0; i < 3; i++) {
    if (result[i] === maxScore) answer.push(i + 1);
  }
  return answer;
}

solution(answers);
