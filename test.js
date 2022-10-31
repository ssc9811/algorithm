const n = 5;
const lost = [2, 4];
const reserve = [3];

function solution(n, lost, reserve) {
  const students = Array(n).fill(1);
  const overlap = lost.filter((studentNum) => reserve.includes(studentNum));

  lost.forEach((studentNum) => (students[studentNum - 1] = 0));
  reserve.forEach((studentNum) => (students[studentNum - 1] = 2));
  overlap.forEach((studentNum) => (students[studentNum - 1] = 1));

  students.forEach((student, i) => {
    if (student === 2) {
      if (students[i - 1] === 0) {
        students[i - 1] = 1;
        students[i] = 1;
      } else if (students[i + 1] === 0) {
        students[i + 1] = 1;
        students[i] = 1;
      }
    }
  });
  return students.filter((student) => student !== 0).length;
}

solution(n, lost, reserve);
