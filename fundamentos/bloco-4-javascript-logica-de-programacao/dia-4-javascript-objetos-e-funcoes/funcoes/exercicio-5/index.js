// let array = [2, 8, 3, 2, 5, 8, 2, 3, 2, 8, 8, 8];
let array = [2, 3, 2, 5, 8, 2, 3, 2];

function getMostRepeatedNumber (array) {
  let scoresByIndex = [];
  let counter = 0;
  
  for (let index = 0; index < array.length; index += 1) {
    let currentNumber = array[index];
  
    for (let number of array) {
      if (currentNumber === number) {
        counter += 1;
      }
    }

    scoresByIndex.push(counter);
    counter = 0;
  }
  
  let mostRepeated = 0;
  let sameIndex = 0;

  for (index = 0; index < scoresByIndex.length; index += 1) {
    if (mostRepeated < scoresByIndex[index]) {
      mostRepeated = scoresByIndex[index];
      sameIndex = scoresByIndex.indexOf(mostRepeated);
    }
  }

  return array[sameIndex];
}

let mostRepeatedNumber = getMostRepeatedNumber(array);

console.log(mostRepeatedNumber);
