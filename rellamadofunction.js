//anidado de funciones

function a (){
    console.log("a")
    function b(){
        console.log("b")
    }
    b()
}
a()


// Metodo - funcion que permite almacenarse dentro de un objeto y esta puede ser llamada mediante la constante del objeto y la funcion interna.
const rocket={
    name:"falcon9",
    message: function message(){
        console.log("my name is falcon 9")
    }
} 
rocket.message()
