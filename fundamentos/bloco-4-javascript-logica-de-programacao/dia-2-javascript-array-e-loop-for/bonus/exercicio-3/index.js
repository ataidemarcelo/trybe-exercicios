/**
 * Criar um array numbers
 * Criar um novo array
 * Criar um segundo index e incrementar dentro do for
 * Utilizar um for para percorrer o array numbers
 * Usar o index do for para acessar o primeiro item do array numbers
 * Usar o secondIndex para acessar o segundo item do array numbers
 * Verificar se é o último item
 *    Se for multiplica o item por dois e adicionar no novo array
 *    Se não for adiciona no novo array a multiplicação dos valores encontrados nos passos anteriores
 * Incrementar o index e o secondIndex
 */ 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbers = [2, 4, 6]; // Obs: Usando um array menor ficou mais fácil visualizar os passos

let newArray = [];
let secondIndex = 1;

for (let index = 0; index <= numbers.length - 1; index += 1) {
  let isTheLastItemInTheArray = index === numbers.length - 1
  if (isTheLastItemInTheArray) {
    newArray.push((numbers[numbers.length - 1] * 2))
  } else {
    newArray.push(numbers[index] * numbers[secondIndex])
  }
  secondIndex += 1
}

console.log(newArray);
