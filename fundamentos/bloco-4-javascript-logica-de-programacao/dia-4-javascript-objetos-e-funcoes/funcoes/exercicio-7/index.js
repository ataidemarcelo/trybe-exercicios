// let stringOne = 'trybe';
// let stringTwo = 'be';
let stringOne = 'joaofernando';
let stringTwo = 'fernan';

function verificaFimPalavra (str1, str2) {
  if (str1[str1.length -1] === str2[str2.length -1] && str1[str1.length -2] === str2[str2.length -2]) {
    return true;
  }

  return false;
}

let ehIgualFimPalavra = verificaFimPalavra(stringOne, stringTwo);

console.log(ehIgualFimPalavra);
