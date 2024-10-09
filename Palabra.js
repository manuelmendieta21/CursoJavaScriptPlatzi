

//Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" 
// y false si al menos una palabra no termina con la letra "a".
//Usa el método endsWith() de string para resolverlo.


const words=['casa', 'asa', 'taza', 'cocha']



function acabanEnA(words) {
    // tu código aquí
    let palabras = words.every(palabra => palabra.endsWith("a"))
    console.log(palabras)
    return palabras
  }

  acabanEnA(words)