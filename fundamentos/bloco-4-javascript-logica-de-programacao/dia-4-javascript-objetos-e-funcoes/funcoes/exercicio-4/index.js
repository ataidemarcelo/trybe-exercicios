let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function getBiggestName (array) {
  let biggestName = '';
  
  for (let name of array) {
    if (biggestName.length < name.length) {
      biggestName = name;
    }
  }
  return biggestName;
}

let biggestName = getBiggestName(array);

console.log(biggestName);
