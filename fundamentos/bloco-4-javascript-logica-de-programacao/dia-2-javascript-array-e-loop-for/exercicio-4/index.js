let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let quantityOfItems = numbers.length;

for (let index = 0; index < numbers.length; index += 1) {
  total += numbers[index];
}

let average = total / quantityOfItems;

if (average <= 20) {
  console.log('Valor menor ou igual a 20')
  return;
} 

console.log('Valor maior que 20');
