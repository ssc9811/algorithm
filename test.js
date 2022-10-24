const N = 5; // 스테이지 개수
const stages = [2, 1, 2, 6, 2, 4, 3, 3]; // 사용자가 도전 중인 스테이지의 번호

function solution(N, stages) {
  const failRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player === stage).length;
    const playerChallenging = stages.filter((player) => player >= stage).length;
    failRate.push([stage, playerReached / playerChallenging]);
  }
  failRate.sort((a, b) => b[1] - a[1]);
  return failRate.map((stage) => stage[0]);
}

solution(N, stages);
