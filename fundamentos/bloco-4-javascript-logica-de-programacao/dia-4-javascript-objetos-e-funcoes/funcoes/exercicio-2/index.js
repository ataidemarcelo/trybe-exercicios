let array = [2, 3, 6, 7, 10, 1];

function getTheIndexOfTheBiggestNumber (array) {
  let biggestNumber = 0;
  
  for (let item of array) {
    if (biggestNumber < item) {
      biggestNumber = item;
    }
  }

  return array.indexOf(biggestNumber);
}

const indexBiggestNumber = getTheIndexOfTheBiggestNumber(array);

console.log(indexBiggestNumber);

