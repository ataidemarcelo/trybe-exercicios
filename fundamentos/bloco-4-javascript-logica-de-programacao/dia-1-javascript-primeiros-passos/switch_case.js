let resultadoProcessoSeletivo = 'aprovada'

// if (nota >= 80) {
//   console.log("Parabéns, você foi aprovada(o)!")
// } else if (nota >= 60) {
//   console.log("Você está na nossa lista de espera")
// } else {
//   console.log("Você foi reprovada(o)")
// }

switch (resultadoProcessoSeletivo) {
  case 'aprovada':
    console.log("Parabéns, você foi aprovada(o)!")
    break;
  case 'lista':
    console.log("Você está na nossa lista de espera")
    break;
  case 'reprovada':
    console.log("Você foi reprovada(o)")
    break;
  default:
    console.log('não se aplica')
}