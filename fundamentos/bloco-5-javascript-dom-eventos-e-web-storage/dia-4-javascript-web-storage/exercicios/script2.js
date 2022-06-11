console.log('Web Storage');

const btnChangeFontFamily = document.getElementById('change-font-family');
console.log(btnChangeFontFamily);

createIndex('fontIndex');
let fontIndex = localStorage.getItem('fontIndex');
const fontFamilyList = ['Montserrat', 'Dancing Script', 'sans-serif', 'Monospace', 'serif'];

function changeFontFamily (index, list) {
  
  // Separar a criação da propriedade do incremento
  if (typeof (Storage) != "undefined") {
    if(localStorage.fontIndex !== undefined) {
      let fontIndex = parseInt(localStorage.fontIndex);
      if (fontIndex < list.length - 1) {
        fontIndex += 1;
      } else {
        fontIndex = 0;
      }
      localStorage.fontIndex = fontIndex;
    } else {
      localStorage.fontIndex = 0;
    }   
  } else {
    document.write("Sem suporte para Web Storage");
  }
  document.body.fontFamily = list[index];
  console.log(list[index]);
  
}

btnChangeFontFamily.addEventListener('click', function () {
  fontIndex = localStorage.getItem('fontIndex');

  changeFontFamily(fontIndex, fontFamilyList);
});
// changeFontFamily(fontIndex, fontFamilyList);

function incrementIndex (index, array) {
  if (index < array.length) {
    index += 1
  }
  index = 0;
}

function createIndex (index) {
  // let indexList = [];
  localStorage[index] = 0;
}

// document.onload = function () {
// }
