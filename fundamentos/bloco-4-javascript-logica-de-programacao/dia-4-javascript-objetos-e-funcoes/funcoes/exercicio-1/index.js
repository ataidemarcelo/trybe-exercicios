// let str = 'arara';
// let str = 'desenvolvimento';
// let str = 'A base do teto desaba';
// let str = 'banana';
let str = 'osso';

function verificaPalindrome (str) {
  str = str.toLowerCase().replace(/ /g, '');
  
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === str[str.length-(index+1)]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}


let ehPalindrome = verificaPalindrome(str);

console.log(ehPalindrome);
