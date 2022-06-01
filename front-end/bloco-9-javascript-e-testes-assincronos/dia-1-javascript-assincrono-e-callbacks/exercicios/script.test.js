const { uppercase } = require('../exercicios/script');

describe('Uppercase', () => {
  test('Deveria retornar todas as letra da string em maíusculo.', (done) => {
    uppercase('marcelo', (str) => {
      try {
        expect(str).toBe('MARCELO');
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});