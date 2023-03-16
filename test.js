function solution(n, k) {
  const newK = Math.floor(n / 10);
  return n * 12000 + (k - newK) * 2000;
}

solution(64, 6);
