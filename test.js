// const strings = ["abce", "abcd", "cdx"];
const strings = ["sun", "bed", "car"];

const n = 1;

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] === b[n]) return a > b ? 1 : -1;
    else return -1;
  });
}

solution(strings, n);
