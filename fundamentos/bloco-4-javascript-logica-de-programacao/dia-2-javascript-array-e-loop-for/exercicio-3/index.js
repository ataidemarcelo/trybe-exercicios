let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let quantityOfItems = numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
  total += numbers[index];
}

let average = total / quantityOfItems;

console.log(average);
