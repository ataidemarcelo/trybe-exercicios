let value = 5;

let str = '';
let symbol = '*';

for (let index = 1; index <= value; index += 1) {
  str += symbol;
  if (index === value) {
    for (let secondIndex = 0; secondIndex < value; secondIndex += 1) {
      console.log(str);
    }
  }
}
