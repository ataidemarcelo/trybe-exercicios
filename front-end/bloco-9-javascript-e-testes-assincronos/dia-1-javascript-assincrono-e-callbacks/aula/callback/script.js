const sleep = (sleepDuration) => {
  const now = new Date().getTime();
  while (new Date().getTime() < now + sleepDuration );
}

const preparaSanduiche = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ('true') {
      return resolve('1 - Sanduiche pronto!!!');
    } else {
      return reject('1 -Deu errado!!!')
    }
  }, 5000);
});

const preparaSobremesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ('true') {
      return resolve('2 - Sobremesa pronto!!!');
    } else {
      return reject('2 -Deu errado!!!');
    }
  }, 1000);
});

const init = 'INICIO!';
const middle = 'MEIO!';

// preparaSanduiche
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// preparaSobremesa
//   .then(data => console.log(data))
//   .catch((err) => console.log(err));

const log = new Promise((resolve) => {
  resolve('FIM!');
});

Promise
  .all([init, preparaSanduiche, middle, preparaSobremesa, log])
  .then(datas => datas.map(data => console.log(data)))
  .catch(err => console.log(err));
