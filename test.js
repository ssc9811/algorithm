let [n, ...cmds] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

const deque = [];
const answer = [];

for (let cmd of cmds) {
  let [event, value] = cmd.split(" ");
  switch (event) {
    case "push_front":
      deque.unshift(value);
      break;
    case "push_back":
      deque.push(value);
      break;
    case "pop_front":
      answer.push(deque.length ? deque.shift() : -1);
      break;
    case "pop_back":
      answer.push(deque.length ? deque.pop() : -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length ? 0 : 1);
      break;
    case "front":
      answer.push(deque.length ? deque[0] : -1);
      break;
    case "back":
      answer.push(deque.length ? deque[deque.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));
