//Objeto creado para almacenar info
// https://platzi.com/new-home/clases/8617-javascript-fundamentos/66416-identificador-this/
//Enlace Implicito 
const house ={
    dogName :'fido',
    dogGreeting:function(){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
//Permite hacer el llamado de la funcion dentro de mi objeto, sin esta no permite que se ejecute el
//dentro del objeto.
house.dogGreeting()

//Enlace explicito explicit binding
 function dogGreeting(){
    console.log(`hi, el es el perrito ${this.dogName}`)
}

//Creamos el objeto del mensaje
const newHouse={
    dogName:'Coconut',
}
const newAdress ={
    dogName:'Kyra the pug',
    address:'av san pascual'
}



//llamada a la función
dogGreeting.call(newHouse)

//Creamos otra function con el llamado
function newDogGreeting(owner,address){
    console.log(`hi, im ${this.dogName} and I live with ${owner} on ${address}`)
}
//Creamos los valores para la function de anterior mente 
const owner = 'Lucy'
const address = 'Avenue 123'

//llamado call permite llamar el objeto  de una función con un contexto especifico
newDogGreeting.call(newAdress,owner,newAdress.address)
