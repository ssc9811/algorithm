const a1 = 3
const a2 = 4


// const waterMelon = n => {
//   return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
// }

const waterMelon = n => {
  console.log('수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : ''));
}

waterMelon(5)