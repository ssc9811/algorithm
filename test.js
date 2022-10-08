const s = "try hello world";

function solution(s) {
  return s
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, idx) =>
          idx % 2 !== 0 ? word[idx].toLowerCase() : word[idx].toUpperCase()
        )
        .join("")
    )
    .join(" ");
}

solution(s);
