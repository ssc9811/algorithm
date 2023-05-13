function solution(number, limit, power) {
  let answer = 0;
  for (let num = 1; num <= number; num++) {
    let count = 0;
    for (let j = 1; j * j <= num; j++) {
      if (j * j === num) {
        count++;
      } else if (num % j === 0) {
        count += 2;
      }
    }
    if (count > limit) count = power;
    answer += count;
  }

  return answer;
}

solution(10, 3, 2); //21
