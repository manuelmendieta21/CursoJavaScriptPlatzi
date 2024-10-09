//JavaScript proporciona un método incorporado en arrays llamado .sort() para ordenar sus elementos. 
//Por defecto no es muy útil pero puedes personalizar su comportamiento para que ordene los elementos de la manera que necesites.




let numeros = [5, 10, 2, 25, 7]


//Menor a mayor
numeros.sort(function(a, b) {
  return a - b
})
console.log(numeros) // [2, 5, 7, 10, 25]


//Mayor a menor 
numeros.sort(function(a, b) {
    return b - a
  })
  
console.log(numeros) // [25, 10, 7, 5, 2]

//sort() y toSorted()
//Como ves, .sort() modifica el array original. Si quieres obtener un array ordenado sin modificar el original,
//puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado.

let numeros1 = [5, 10, 2, 25, 7]

let numerosOrdenados = numeros1.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]