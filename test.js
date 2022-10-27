const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
  const rank = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };
  lottos = lottos.sort((a, b) => b - a);
  const zeroCount = lottos.reduce((acc, cur) => cur === 0 && acc + 1, 0);
  const correctNumLength = win_nums
    .sort((a, b) => b - a)
    .filter((win_num) => lottos.includes(win_num)).length;
  return [rank[zeroCount + correctNumLength], rank[correctNumLength]];
}

solution(lottos, win_nums);
