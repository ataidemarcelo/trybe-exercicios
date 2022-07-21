export const retornaNumeroAleatorio = () => {
  return Math.floor(Math.random() * 100);
}

export const  divisivelPorDois = () => {
   return (retornaNumeroAleatorio() % 2) === 0;
}

export const somaDoisNumeros = () => {
   return retornaNumeroAleatorio() + retornaNumeroAleatorio();
}
