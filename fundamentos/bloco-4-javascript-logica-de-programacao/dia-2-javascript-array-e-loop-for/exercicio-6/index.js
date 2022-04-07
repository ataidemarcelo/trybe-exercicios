let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [70, 8, 100, 2];

let numberOfOddValues = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    numberOfOddValues += 1;
  }
}

if (numberOfOddValues === 0) {
  console.log('Nenhum valor ímpar encontrado.')
  return;
}

console.log('Quantidade de valores ímpares = ' + numberOfOddValues);
