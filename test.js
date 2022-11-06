const n = 78;

// const a1 = n.toString(2);
// console.log(parseInt(a1, 2));
function solution(n) {
  const oneCount = binaryOne(n);
  let num = n + 1;
  while (true) {
    const nextBinaryOneCount = binaryOne(num);
    if (nextBinaryOneCount === oneCount) return num;
    num++;
  }
}

function binaryOne(n) {
  let oneCount = 0;
  const binary = n.toString(2);
  for (let i of binary) {
    if (i === "1") oneCount++;
  }
  return oneCount;
}
solution(n);
