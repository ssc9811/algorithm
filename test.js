const s = "3people unFollowed me";

function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((string) => string.replace(/^[a-z]/, (char) => char.toUpperCase()))
    .join(" ");
}

solution(s);

const temp = "string";
