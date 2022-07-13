const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while(new Date().getTime() <= now + sleepDuration);
}

const preparaSanduiche = () => {
  setTimeout(() => {
    console.log('1 - Sanduiche');
  }, 3000);
}
const preparaSobremesa = () => {
  setTimeout(() => {
    console.log('2 - Sobremesa');
  }, 3000);
}

console.log('INICIO');

preparaSanduiche();
preparaSobremesa();

console.log('FIM');