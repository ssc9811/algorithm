const s = "VWXYZ";
const n = 2;

// const s1 = "a";

const toUnicode = (char, n) => {
  if (char === " ") {
    return " ";
  } else if (char === "z") {
    return 97 + n - 1;
  } else if (char === "Z") {
    return 65 + n - 1;
  } else {
    return char.charCodeAt(0) + n;
  }
};

// function solution(s, n) {
//   console.log(
//     `${s
//       .split("")
//       .map((char) => String.fromCharCode(toUnicode(char, n)))
//       .join(" ")}`
//   );
// }

function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char === "") return " ";
      const unicode = char.charCodeAt(0);
      if ((unicode + n > 90 && unicode <= 90) || unicode + n > 122) {
        return String.fromCharCode(unicode + n - 26);
      } else {
        return String.fromCharCode(unicode + n);
      }
    })
    .join("");
}

solution(s, n);

console.log("A", "A".charCodeAt(0));
console.log("Z", "Z".charCodeAt(0));
console.log("a", "a".charCodeAt(0));
console.log("z", "z".charCodeAt(0));
console.log(" ", " ".charCodeAt(0));

// console.log(String.fromCharCode(90));
