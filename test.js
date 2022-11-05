const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  let answer = 0;
  let basket = [];
  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const item = board[i][move - 1];
      if (item !== 0) {
        if (basket[basket.length - 1] !== item) {
          basket.push(item);
        } else {
          basket.pop();
          answer += 2;
        }
        board[i][move - 1] = 0;
        break; // 0이 아닌 숫자일 경우 한번만 실행되도록
      }
    }
  });
  return answer;
}

solution(board, moves);
