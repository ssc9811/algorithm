let [n, ...cmds] = require("fs")
  .readFileSync("./baekjoon_input.txt")
  .toString()
  .trim()
  .split("\n");

const queue = [];

let answer = [];

for (let cmd of cmds) {
  let [event, value] = cmd.split(" ");
  value = +value;
  console.log("queue.length", queue.length, event);
  switch (event) {
    case "push":
      queue.push(value);
      break;
    case "pop":
      answer.push(queue.length ? queue.shift() : -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue.length ? 0 : 1);
      break;
    case "front":
      answer.push(queue.length ? queue[0] : -1);
      break;
    case "back":
      answer.push(queue.length ? queue[queue.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));
