//El método filter crea un nuevo array con todos los elementos que devuelven 
//true al ejecutar una función que le pasamos como parámetro.

const strings = ['hola', 'adiós', 'casa', 'coche', 'perro', 'gato']

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter(string => string.includes('a'))

console.log(stringsWithA) // ['hola', 'adiós', 'casa', 'gato']



//El método map crea un nuevo array de la misma longitud que el original, pero con los elementos transformados 
//por una función que le pasamos como parámetro. Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado.

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map((number) => {
  return number * 2
})

console.log(doubleNumbers) // [2, 4, 6]

//O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:

const strings1 = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = strings1.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]

