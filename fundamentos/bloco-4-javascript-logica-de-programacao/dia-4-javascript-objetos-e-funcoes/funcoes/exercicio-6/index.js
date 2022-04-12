const number = 5;
// const number = 6;

function getSum (number) {
  let sum = 0;

  for (let index = 0; index < number; index += 1) {
    sum += number - index
  }

  return sum;
}

let sum = getSum(number);
console.log(sum);
