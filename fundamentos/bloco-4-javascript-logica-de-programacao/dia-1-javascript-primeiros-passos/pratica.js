// // exercicio 01

// const a = 10;
// const b = 2;

// let add = a + b;
// let subtract = a - b;
// let multiply = a * b;
// let division = a / b;
// let modulo = a % b;

// console.log('Adição = ', add);
// console.log('Subtração = ', subtract);
// console.log('Multiplicação = ', multiply);
// console.log('Divisão = ', division);
// console.log('Módulo = ', modulo);

// // exercicio 02
// const number1 = 100;
// const number2 = 134;

// if (number1 > number2) {
//   console.log(number1);
//   // return number1;
// } else {
//   console.log(number2);
//   // return number2;
// }

// // exercicio 03
// const number3 = 45;

// if (number1 > number2 && number1 > number3) {
//   console.log(number1);
//   // return number1;
// } else if (number2 > number3){
//   console.log(number2);
//   // return number2;
// } else {
//   console.log(number3);
//   // return number3;
// }

// // exercicio 04
// const value = 0;

// if (value === 0) {
//   console.log('zero');
// } else if (value > 0) {
//   console.log('positive');
// } else if (value < 0) {
//   console.log('negative');
// } 

// // exercicio 05
// const angles1 = 60;
// const angles2 = 60;
// const angles3 = 60;

// const sumOfTheAngles = angles1 + angles2 + angles3;

// if (sumOfTheAngles === 180) {
//   console.log(true);
//   // return true
// } else if (sumOfTheAngles < 0) {
//   console.log('Angulos inválidos');
//   // return 'Angulos inválidos'
// } else {
//   console.log(false);
//   // return false
// }

// // exercicio 0
// const chessPiece = 'Rainha';

// switch (chessPiece.toLowerCase()) {
//   case 'cavalo':
//     console.log('Se movimenta em "L"');
//     break;

//   case 'peao':
//     console.log('Se movimenta para frente');
//     break;

//   case 'torre':
//     console.log('Se movimenta na vertical e horizontal');
//     break;

//   case 'bispo':
//     console.log('Se movimenta na diagonal');
//     break;
  
//   case 'rei':
//     console.log('Se movimenta para todos os lados, uma casa por vez.');
//     break;

//   case 'rainha':
//     console.log('Se movimenta para todos os lados, quantas casas quiser.');
//     break;

//   default:
//     console.log('Esta peça não existe!');
// }

// // exercicio 07
// const scored = 10;

// if (scored > 100 || scored < 0) {
//   console.log('Error');
// } else if (scored >= 90) {
//   console.log('A');
// } else if (scored >= 80) {
//   console.log('B');
// } else if (scored >= 70) {
//   console.log('C');
// } else if (scored >= 60) {
//   console.log('D');
// } else if (scored >= 50) {
//   console.log('E');
// } else {
//   console.log('F');
// }

// // exercicio 08
// const number4 = 45;
// const number5 = 41;
// const number6 = 40;

// if (number4 % 2 === 0 || number5 % 2 === 0 || number6 % 2 === 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // exercicio 09
// const number7 = 46;
// const number8 = 42;
// const number9 = 41;

// if (number7 % 2 !== 0 || number8 % 2 !== 0 || number9 % 2 !== 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // exercicio 10
// const productCost = 100;
// const saleValue = 220;

// const taxOnCost = 0.20;

// let totalCostValue = productCost + (taxOnCost * productCost);
// let profitPerProduct = saleValue - totalCostValue;

// let quantitySoldPerProduct = 1000;

// if (productCost === 0 || saleValue === 0) {
//   console.log('O custo de um produto ou seu valor de venda não podem ser iguais a zero!')
//   return;
// }

// let totalProfit = quantitySoldPerProduct * profitPerProduct;

// console.log(`Ao vender ${quantitySoldPerProduct} produtos, seu lucro será de: R$ ${totalProfit.toFixed(2).replace('.', ',')}.`);

// exercicio 11

let INSS;
let IR;

const grossSalary = 3000;
const maximumRateINSS = 570.88;

let baseSalary = 0;
let salaryDeduction = 0;
let taxDeductible = 0;

let valueIR = 0;

// INSS
if (grossSalary <= 1556.94) {
  INSS = 0.08;
  salaryDeduction = grossSalary * INSS;
  baseSalary = grossSalary - salaryDeduction
} else if (grossSalary <= 2594.92) {
  INSS = 0.09;
  salaryDeduction = grossSalary * INSS;
  baseSalary = grossSalary - salaryDeduction
} else if (grossSalary <= 5189.82) {
  INSS = 0.11;
  salaryDeduction = grossSalary * INSS;
  baseSalary = grossSalary - salaryDeduction
} else if (grossSalary > 5189.82) {
  INSS = 0;
  salaryDeduction = grossSalary * INSS;
  baseSalary = grossSalary - salaryDeduction
}

// IR
if (baseSalary <= 1903.98) {
  IR = 0;
} else if (baseSalary <= 2826.65) {
  IR = 0.075;
  taxDeductible = 142.80
  valueIR = (baseSalary * IR) - taxDeductible;
} else if (baseSalary <= 3751.05) {
  IR = 0.15;
  taxDeductible = 354.8
  valueIR = (baseSalary * IR) - taxDeductible;
} else if (baseSalary <= 4664.68) {
  IR = 0.225;
  taxDeductible = 636.13
  valueIR = (baseSalary * IR) - taxDeductible;
} else if (baseSalary > 4664.68 ) {
  IR = 0.275;
  taxDeductible = 869.36;
  valueIR = (baseSalary * IR) - taxDeductible;
}


console.log(INSS, IR, salaryDeduction, baseSalary, taxDeductible, valueIR);

let netSalary = baseSalary - valueIR;
console.log(netSalary)