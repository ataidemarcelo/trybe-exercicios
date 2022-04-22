createKeyAndValue('fontFamilyIndex');
createKeyAndValue('fontSizeIndex');
createKeyAndValue('backgroundIndex');
createKeyAndValue('colorIndex');
createKeyAndValue('lineHeigthIndex');

const fontFamilyList = ['Montserrat', 'Dancing Script', 'sans-serif', 'Monospace', 'serif'];
const fontSizeList = ['8px', '12px', '16px', '24px', '32px'];
const backgroundList = ['white', 'red', 'green', 'blue', 'black'];
const colorList = ['red', 'green', 'blue', 'black', 'white'];
const lineHeigthList = ['32px', '38px', '42px'];

const fontFamilyListLength = fontFamilyList.length;
const fontSizeListLength = fontSizeList.length;
const backgroundListLength = backgroundList.length;
const colorListLength = colorList.length;
const lineHeigthListLength = lineHeigthList.length;

let fontFamilyIndex = localStorage.getItem('fontFamilyIndex');
let fontSizeIndex = localStorage.getItem('fontSizeIndex');
let backgroundIndex = localStorage.getItem('backgroundIndex');
let colorIndex = localStorage.getItem('colorIndex');
let lineHeigthIndex = localStorage.getItem('lineHeigthIndex');


document.body.style.fontFamily = fontFamilyList[fontFamilyIndex];
document.body.style.fontSize = fontSizeList[fontSizeIndex];
document.body.style.backgroundColor = backgroundList[backgroundIndex];
document.body.style.color = colorList[colorIndex];
document.body.style.lineHeight = lineHeigthList[lineHeigthIndex];

const btnChangeFontFamily = document.getElementById('change-font-family');
btnChangeFontFamily.addEventListener('click', function () {
  incrementValue('fontFamilyIndex', fontFamilyListLength);
});

const btnChangeFontSize = document.getElementById('change-font-size');
btnChangeFontSize.addEventListener('click', function () {
  incrementValue('fontSizeIndex', fontSizeListLength);
});

const btnBackground = document.getElementById('background');
btnBackground.addEventListener('click', function () {
  incrementValue('backgroundIndex', backgroundListLength);
});

const btnColor = document.getElementById('color');
btnColor.addEventListener('click', function () {
  incrementValue('colorIndex', colorListLength);
});

const btnLineHeigth = document.getElementById('line-heigth');
btnLineHeigth.addEventListener('click', function () {
  incrementValue('lineHeigthIndex', lineHeigthListLength);
});

function createKeyAndValue (keyName) {
  let browserSupportsWebStorage = typeof (Storage) != "undefined";
  
  if (browserSupportsWebStorage) {
    let keyNameNotExistInLocalStorage = localStorage[keyName] === undefined;

    if (keyNameNotExistInLocalStorage) {
      localStorage[keyName] = 0;
    }
  } else {
    document.write("Sem suporte para Web Storage");
  }
}

function incrementValue (keyName, listLength) {
  let keyNameExistInLocalStorage = localStorage[keyName] !== undefined;

  if(keyNameExistInLocalStorage) {
    let indexValue = parseInt(localStorage[keyName]);

    let smallerThanListSize = indexValue < listLength - 1;
    if (smallerThanListSize) {
      indexValue += 1;
    } else {
      indexValue = 0;
    }
    
    localStorage[keyName] = indexValue;

    if (keyName === 'fontFamilyIndex') {
      fontFamilyIndex = indexValue;
      document.body.style.fontFamily = fontFamilyList[fontFamilyIndex];
    } else if (keyName === 'fontSizeIndex') {
      fontSizeIndex = indexValue;
      document.body.style.fontSize = fontSizeList[fontSizeIndex];
    } else if (keyName === 'backgroundIndex') {
      backgroundIndex = indexValue;
      document.body.style.backgroundColor = backgroundList[backgroundIndex];
    } else if (keyName === 'colorIndex') {
      colorIndex = indexValue;
      document.body.style.color = colorList[colorIndex];
    } else if (keyName === 'lineHeigthIndex') {
      lineHeigthIndex = indexValue;
      document.body.style.lineHeight = lineHeigthList[lineHeigthIndex];
    }

  } else {
    createKeyAndValue(keyName);
  }   
}
