let value = 7;

let str = '';
let symbol = '';
let space = ' ';

for (let index = 1; index <= value; index += 1) {
  symbol += '*';
  for (let secondIndex = index + 1; secondIndex <= value; secondIndex += 1) {
    str += space;
  }
  console.log(str + symbol);
  str = '';
}
