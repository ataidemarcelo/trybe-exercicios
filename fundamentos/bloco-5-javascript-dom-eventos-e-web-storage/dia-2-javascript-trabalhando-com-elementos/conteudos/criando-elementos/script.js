// 1 - Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
console.log(pai);

const section1 = document.createElement('section');
section1.id = 'umOutroIrmao';
console.log(section1);
pai.appendChild(section1);

// 2 - Crie um filho para elementoOndeVoceEsta .
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
console.log(elementoOndeVoceEsta);

const section2 = document.createElement('section');
section2.id = 'umOutroPerdido';
console.log(section2);
elementoOndeVoceEsta.appendChild(section2);

// 3 - Crie um filho para primeiroFilhoDoFilho .
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

const section3 = document.createElement('section');
section3.className = 'outroFilhoDoPrimeiroFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(section3);

// 4 - A partir desse filho criado, acesse terceiroFilho .
const filhoDoPrimeiroFilhoDoFilho = document.querySelector('.outroFilhoDoPrimeiroFilhoDoFilho');
console.log(filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.parentElement.children[2]);
