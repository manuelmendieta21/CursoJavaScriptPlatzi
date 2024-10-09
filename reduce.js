/*
El método reduce es un poco más complejo que los anteriores. Este método te permite crear un único valor a partir de un Array.

Recibe dos parámetros: una función que se ejecutará por cada elemento y un valor inicial, opcional, que será donde podremos acumular los valores.

El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:

El acumulador: el valor que se va a ir acumulando en cada iteración
El elemento actual: el elemento del Array que estamos iterando en ese momento.
El índice: la posición del elemento actual en el Array.

*/
const numbers = [1, 2, 3, 4, 5, 6, 7]
const doubleEvenNumbers = numbers.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0
  const doubled = currentNumber * 2
  const isGreaterThanFive = doubled > 5

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled)
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator
  }
}, []) // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers) // [8, 12]