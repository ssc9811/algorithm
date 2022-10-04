const price = 3
const money = 20
const count = 4


function solution(price, money, count) {
  let sum = 0
  for (let i = 1; i <= count; i++) {
    sum += price * i
  }
  return money - sum
}

solution(price, money, count)