
saludo ='Hola Muy buenas tardes'

//Impreme la letra que busquemos mediante las dos formas
console.log(saludo[9]);
console.log(saludo.charAt(3));

//Buscar una palabra
console.log(saludo.indexOf('M'));

//
console.log(saludo.slice(3,5))

// Ajustar contenido a Mayusculas
console.log(saludo.toLocaleUpperCase())
//Ajustar Minusculas
console.log(saludo.toLocaleLowerCase())
//Quitar espacios 
const saludos=' Hola Saludo '
const saludoSinEspacio = (saludos.trim())
console.log(saludoSinEspacio)