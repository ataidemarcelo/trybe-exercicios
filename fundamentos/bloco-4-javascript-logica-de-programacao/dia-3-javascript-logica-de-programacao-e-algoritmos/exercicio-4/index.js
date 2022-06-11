// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível, ou havia como fazer a mesma coisa com menos passos?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as instruções?

/**
 * ENUNCIADO:
 * escreva um algoritmo que retorne o maior número primo entre 0 e 50.
 * 
 * PASSO A PASSO (baby steps):
 * 
 * Criar duas constantes, menor e maior intervalo
 * Criar um array vazio para guardar todos os números primos encontrados no intervalo
 * Criar um primeiro loop que itera a quantidade de vezes do intervalo que sera testado
 * 
 * Dentro do primeiro loop: (Percorre uma quantidade determinada pelo range do intervalo) 
 *    - criar uma variável para representar o número da vez a ser testado
 *    - criar um array para armazenar os resultados dos testes
 *    - criar uma variavel auxiliar para cada resultado
 * 
 * Obs: Se o número tiver resultado inteiro só quando divisivel por ele mesmo é primo
 * 
 * Dentro do segundo loop: (testa se um número tem um só divisor com resultado inteiro)
 *    - criar uma variável para armazenar o número da vez, pelo qual vai ser dividido
 *    - adiciona o resultado de cada divisão a variavel auxiliar
 *    - se o resultado da divisão for inteiro adiciona no array
 * 
 * Se o array tiver só um resultado inteiro das divisões só é divisivel por ele mesmo.
 * 
 * 
 * Adiciona ao array de numeros primos
 * 
 * Criar uma variável para guardar o maior número
 * Criar um loop para percorrer o array de números primos
 * Dentro do loop, testar se o item do array é maior que a variável maior número
 *  - se for adiciona ela a variável maior número
 *  - se não continua no loop
 * 
*/

const MIN_RANGE = 0;
const MAX_RANGE= 50;
let primeNumbers = [];


for (let index = MIN_RANGE; index < MAX_RANGE; index += 1) {
  let testedNumber = index

  let integerResults = [];
  let result = 0;

  for (let secondIndex = 2; secondIndex <= testedNumber; secondIndex += 1) {
    let isDivisible = secondIndex

    result = testedNumber / isDivisible;

    if (Number.isInteger(result)) {
        integerResults.push(isDivisible);
    }
  }

  let aSingleDivisorIsPrime = integerResults.length === 1

  if (aSingleDivisorIsPrime) {
    let isPrime = testedNumber
    primeNumbers.push(isPrime)
  }

}

let biggestPrimeNumber = 0;

for (let index = 0; index < primeNumbers.length; index += 1) {
  if (primeNumbers[index] > biggestPrimeNumber ) {
    biggestPrimeNumber = primeNumbers[index]
  }
}

console.log(primeNumbers)
console.log(biggestPrimeNumber)
