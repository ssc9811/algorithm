const s = "(())()";

function solution(string) {
  const answer = [];
  if (string[0] === ")") return false;
  else {
    string.split("").map((char) => {
      if (char === "(") answer.push(char);
      else if (char === ")") answer.pop();
    });

    return answer.length === 0 ? true : false;
  }
}

solution(s);
