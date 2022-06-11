let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherValue = 0;
let currentValue = numbers[0]

for (let index = 0; index < numbers.length; index += 1) {
  if (higherValue < numbers[index]) {
    higherValue = numbers[index];
  }
}

console.log(higherValue);
