/*
Existen varios métodos en JavaScript que te permiten, específicamente, 
buscar dentro de un Array. Estos métodos incluyen indexOf, some, every, find, 
findIndex e includes.   */



const emojis = ['✨', '🥑', '😍']

//indexOf que retorna la posicion del la busqueda, si no encuentra nada devuelve -1 
console.log("indexOf")
const posicionCorazon = emojis.indexOf('🥑')
console.log(posicionCorazon)

//El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda.


console.log("includes");
const tieneCorazon = emojis.includes('😍')
console.log(tieneCorazon) // -> true

//El método some te permite verificar si al menos uno de los elementos de un Array cumple con una condición.
//Para utilizarlo, le pasas una función como argumento. Esta función recibe como argumento cada uno de los elementos del Array y debe retornar un valor booleano.

const names = ['Leo', 'Isa', 'Ían', 'Lea']
const tieneNombreLargo = names.some(name => name.length > 3)
console.log(tieneNombreLargo)


//Algo importante a tener en cuenta es que el método some deja de iterar sobre el Array en cuanto encuentra un elemento que cumple con la condición. Por ejemplo,
//si tenemos un Array de 10 elementos y el elemento número 3 cumple con la condición, el método some no va a iterar sobre los 7 elementos restantes:  

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const tieneNumeroMayorA5 = numbers.some(number => {
  console.log(`Estoy iterando sobre el número ${number}`) // -> Imprime hasta el número 6
  return number >= 5
})
console.log(tieneNumeroMayorA5) // -> true


//El método every te permite verificar si todos los elementos de un Array cumplen con una condición. Es similar a some, 
//pero en lugar de verificar si al menos uno de los elementos cumple con la condición, los verifica todos.

// ¿Todos los emojis son felices?
console.log("Every emojis")
const emojis2 = ['😀', '😂', '😍', '😭', '🥺', '😎']
const todosSonFelices = emojis2.every(emoji => emoji === '😀')
console.log(todosSonFelices) // -> false

// ¿Todos los números son pares?
console.log("Every Pares")
const numbers2 = [2, 4, 7, 10, 12]
const todosSonPares = numbers2.every(number => number % 2 === 0)
console.log(todosSonPares) // -> false

// ¿Todos los strings son mayores a 3 caracteres?
console.log("Every Caracteres nombres")
const names1 = ['Miguel', 'Juan', 'Itziar', 'Isabel']
const todosLosNombresSonLargos = names1.every(name => name.length > 3)
console.log(todosLosNombresSonLargos) // -> true

//El método find te permite encontrar el primer elemento que cumple con una condición. 
//Lo interesante es que este método te devuelve el elemento en sí, no un valor booleano como some y every.
// Aunque el funcionamiento es igual: hay que pasarle una función como argumento que retorne un valor booleano.

console.log("Metodo find")
const numbers3 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const firstNegativeNumber = numbers3.find(number => number < 0)
console.log(firstNegativeNumber) // -> -10

//Si no encuentra ningún elemento que cumpla con la condición, el método find retorna undefined.


//El método findIndex es similar a find, pero en lugar de devolver el elemento que cumple con la condición, devuelve el índice de ese elemento.

console.log("Metodo findIndex")
const numbers4 = [13, 27, 44, -10, 81]
// encuentra el primer número negativo
const findIndexNegativeNumber = numbers4.findIndex(number => number < 0)
console.log(findIndexNegativeNumber) // -> 3
//Si no encuentra ningún elemento que cumpla con la condición, el método findIndex retorna -1.