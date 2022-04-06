const myName = 'Marcelo'
const birthCity = 'Petrópolis-RJ'
let birthYear = 1972

console.log(myName, birthCity, birthYear)

birthYear = 2030

console.log(birthYear)

birthCity = 'México'

// Recebe uma msg de Error
// TypeError: Assignment to constant variable.
console.log(birthCity)
