// | "01033334444" | "**\*\*\***4444" |
const phoneNum = "01033334444"

console.log(phoneNum.slice(-4))
console.log(phoneNum.slice(0, -4).replace(/[0-9]/gi, '*'))

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}