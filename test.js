const people = [70, 50, 80, 50];
const limit = 100;

function solution(people, limit) {
  people.sort((a, b) => b - a);
  let answer = 0;
  let min = 0;
  let max = people.length - 1;
  while (min < max) {
    let sum = people[min] + people[max];
    if (sum <= limit) {
      min++;
      max--;
    } else {
      min++;
    }
    answer++;
  }
  if (min === max) answer++;
  console.log(answer);
}

solution(people, limit);
