//Explicit type Casting

const string ='43'
console.log(string)
console.log(typeof string)
//hacemos la conversion de strin a number
const integer= parseInt(string)
console.log(integer)
//tipo de valor es si es string o number
console.log(typeof integer)

//Conversion de string con decimal 
const floatString='12.56'
console.log(typeof(floatString))
const float= parseFloat(floatString)
console.log(typeof(float))


//type casting de forma implicit
const sum = '5'+3
const num = 3
console.log(sum)
//conversion y concatenar numero
suma = parseInt(sum)+ num
console.log(suma)