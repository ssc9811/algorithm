const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

// function solution(n, arr1, arr2) {
//   const newArr1 = arr1.map((value) => value.toString(2).padStart(n, "0"));
//   const newArr2 = arr2.map((value) => value.toString(2).padStart(n, "0"));

//   let answer = [];
//   for (let i = 0; i < newArr1.length; i++) {
//     let totalArr = [];
//     for (let j = 0; j < newArr2.length; j++) {
//       if (newArr1[i][j] === "0" && newArr2[i][j] === "0") {
//         totalArr.push("0");
//       } else {
//         totalArr.push("1");
//       }
//     }
//     answer.push(totalArr.join(""));
//   }
//   return answer.map((value) => value.replaceAll("1", "#").replaceAll("0", " "));
// }

var solution = (n, a, b) => {
  console.log(
    "a",
    a.map((x) => x.toString(2).padStart(n, 0))
  );
  console.log(
    "b",
    b.map((x) => x.toString(2).padStart(n, 0))
  );
  console.log(
    a.map((a, i) =>
      (a | b[i])
        .toString(2)
        .padStart(n, 0)
        .replaceAll("0", " ")
        .replaceAll("1", "#")
    )
  );
};

var solution = (n, a, b) =>
  a.map((a, i) =>
    (a | b[i])
      .toString(2)
      .padStart(n, 0)
      .replaceAll("0", " ")
      .replaceAll("1", "#")
  );

solution(n, arr1, arr2);

// console.log(x.toString(2).padStart(n, "0"));

// .replaceAll("1", "#").replaceAll("0", " ")
// .replaceAll("1", "#").replaceAll("0", " ")
