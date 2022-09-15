const s = 'ppoyoydpy';

const arr = s.toUpperCase().split('');
const pArr = arr.filter(s => s === 'P')
const yArr = arr.filter(s => s === 'Y')

if (pArr.length === yArr.length) {
  console.log(true);
} else {
  console.log(false);
}

function numPY(s) {
  console.log(
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

numPY(s)