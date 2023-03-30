function solution(seoul) {
  console.log(
    "value",
    seoul.findIndex((value) => value === "Kim" && value)
  );
  console.log(
    "index",
    seoul.findIndex((value, index) => value === "Kim" && index)
  );
}

solution(["Kim", "Jane"]);
