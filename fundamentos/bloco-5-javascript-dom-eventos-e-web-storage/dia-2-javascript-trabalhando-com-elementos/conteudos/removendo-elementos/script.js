// 1 - Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
const pai = document.getElementById('pai');

const primeiroFilho = document.getElementById('primeiroFilho');
const terceiroFilho = document.getElementById('terceiroFilho');
const quartoEUltimoFilho = document.getElementById('quartoEUltimoFilho');
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');

pai.removeChild(primeiroFilho);
pai.removeChild(terceiroFilho);
pai.removeChild(quartoEUltimoFilho);
pai.firstElementChild.removeChild(segundoEUltimoFilhoDoFilho);
