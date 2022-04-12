let array = [2, 4, 6, 7, 10, 0, -3];

function getTheIndexOfTheSmallestNumber (array) {
  let smallestNumber = array[0];
  
  for (let item of array) {
    if (smallestNumber > item) {
      smallestNumber = item;
    }
  }

  return array.indexOf(smallestNumber);
}


let indexSmallestNumber = getTheIndexOfTheSmallestNumber(array);
console.log(indexSmallestNumber);
