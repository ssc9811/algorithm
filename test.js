const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";
function solution(numbers, hand) {
  let currentLeft = 10;
  let currentRight = 12;

  const getDistance = (a, b) => {
    return (
      Math.sqrt(Math.pow(a[0] - b[0], 2)) + Math.sqrt(Math.pow(a[1] - b[1], 2))
    );
  };
  const getNumLocation = (num) => {
    return [Math.floor((num - 1) / 3), Math.floor((num - 1) % 3)];
  };
  const toLeft = (num) => {
    currentLeft = num;
    return "L";
  };
  const toRight = (num) => {
    currentRight = num;
    return "R";
  };

  return numbers
    .map((number) => {
      if (number === 0) {
        number = 11;
      }
      if (number % 3 === 1) {
        return toLeft(number);
      } else if (number % 3 === 0) {
        return toRight(number);
      } else {
        const currentNumLocation = getNumLocation(number);
        const leftNumLocation = getNumLocation(currentLeft);
        const rightNumLocation = getNumLocation(currentRight);
        const leftDistance = getDistance(leftNumLocation, currentNumLocation);
        const rightDistance = getDistance(rightNumLocation, currentNumLocation);

        if (leftDistance === rightDistance) {
          return hand === "right" ? toRight(number) : toLeft(number);
        } else if (leftDistance < rightDistance) {
          return toLeft(number);
        } else {
          return toRight(number);
        }
      }
    })
    .join("");
}

solution(numbers, hand);
