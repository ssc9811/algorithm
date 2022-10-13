const sizes = [
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
];

function solution(sizes) {
  let width = 0;
  let height = 0;
  sizes.forEach((size) => {
    const [a, b] = size.sort((a, b) => b - a);
    if (a > width) width = a;
    if (b > height) height = b;
  });
  return width * height;
}

solution(sizes);
