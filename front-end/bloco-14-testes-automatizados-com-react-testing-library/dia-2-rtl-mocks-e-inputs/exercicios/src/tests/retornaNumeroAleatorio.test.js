let retornaNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100);
}

let  divisivelPorDois = () => {
   return (retornaNumeroAleatorio() % 2) === 0;
}

// let somaDoisNumeros = () => {
//    return retornaNumeroAleatorio() + retornaNumeroAleatorio();
// }

describe('DivisivelPorDois', () => {
  // test('Verifica se retorna true se for passado um número par', () => {
  //   funcs.divisivelPorDois = jest.fn().mockReturnValue(4);
  //   funcs.divisivelPorDois();
  //   expect(funcs.divisivelPorDois).toHaveBeenCalled();
  // });
  
  test('verifica se retorna true quando o numro é par', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(4);
    divisivelPorDois();
    expect(divisivelPorDois()).toBe(true);
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(2);
  });
});