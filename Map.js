
//Metodo itera  sobre la lista de objetos y busca el objeto que cumpla con la condición

const numbers =[1,3,4,5]
const validacion = numbers.map(num => num*num)
console.log(validacion)

console.log("forEach")
const Validacion2= numbers.forEach(llamado  => console.log(llamado*llamado))
console.log(Validacion2)
