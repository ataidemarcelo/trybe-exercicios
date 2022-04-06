// exercicio 01

const a = 10;
const b = 2;

let add = a + b;
let subtract = a - b;
let multiply = a * b;
let division = a / b;
let modulo = a % b;

console.log('Adição = ', add);
console.log('Subtração = ', subtract);
console.log('Multiplicação = ', multiply);
console.log('Divisão = ', division);
console.log('Módulo = ', modulo);

// exercicio 02
const number1 = 100;
const number2 = 134;

if (number1 > number2) {
  console.log(number1)
  // return number1;
} else {
  console.log(number2)
  // return number2;
}

// exercicio 03
const number3 = 45;

if (number1 > number2 && number1 > number3) {
  console.log(number1)
  // return number1;
} else if (number2 > number3){
  console.log(number2)
  // return number2;
} else {
  console.log(number3)
  // return number3;
}

// exercicio 04
const value = 0;

if (value === 0) {
  console.log('zero')
} else if (value > 0) {
  console.log('positive')
} else if (value < 0) {
  console.log('negative')
} 

// exercicio 05
const angles1 = 60
const angles2 = 60
const angles3 = 60

const sumOfTheAngles = angles1 + angles2 + angles3

if (sumOfTheAngles === 180) {
  console.log(true)
  // return true
} else if (sumOfTheAngles < 0) {
  console.log('Angulos inválidos')
  // return 'Angulos inválidos'
} else {
  console.log(false)
  // return false
}

// exercicio 0
const chessPiece = 'Rainha'

switch (chessPiece.toLowerCase()) {
  case 'cavalo':
    console.log('Se movimenta em "L"');
    break;

  case 'peao':
    console.log('Se movimenta para frente');
    break;

  case 'torre':
    console.log('Se movimenta na vertical e horizontal');
    break;

  case 'bispo':
    console.log('Se movimenta na diagonal');
    break;
  
  case 'rei':
    console.log('Se movimenta para todos os lados, uma casa por vez.');
    break;

  case 'rainha':
    console.log('Se movimenta para todos os lados, quantas casas quiser.');
    break;

  default:
    console.log('Esta peça não existe!')
}

// exercicio 07
const scored = 10;

if (scored > 100 || scored < 0) {
  console.log('Error')
} else if (scored >= 90) {
  console.log('A')
} else if (scored >= 80) {
  console.log('B')
} else if (scored >= 70) {
  console.log('C')
} else if (scored >= 60) {
  console.log('D')
} else if (scored >= 50) {
  console.log('E')
} else {
  console.log('F')
}

// exercicio 08