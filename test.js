let N = +require("fs").readFileSync("./test_input.txt").toString().trim();

let num = 2;
while (N > 1) {
  if (N % num === 0) {
    N /= num;
    console.log(num);
  } else {
    num++;
  }
}
