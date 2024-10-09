let camiseta = 10000 
let pantalon = 20000
let zapatos = 30000


/*Funciones nos permite crear pequeños bloques de codigo y reutilizar el codigo.*/




function remates(camiseta){
    if (camiseta >= 10000){
        console.log(`El remate de la es de 10000 hace el 30%`) 
        let newCamiseta= camiseta * 0.3
        console.log(`El valor de descuento = ${newCamiseta}`)
        let valorTotal = camiseta - newCamiseta
        console.log(`El valor total de la camiseta es ${valorTotal}`)

    }
    else {
        console.log("No tiene Descuento.")
    }
}
remates(camiseta)


//1 Pasar Funciones como argumentos --> callback una funcion que se pasa como argumento
function a(){}
function b(a){}
b(a)

//retornar funciones
 
function a(){
    function b(){}
    return b
}

//Asignar funciones a variables

//esta seria una asignacion de funcion a  una variable sin nombrarla
const a = function(){
    console.log("expesion de function")
}

//Tener propiedades y metodos 
function a (){}
//contexto de ejecucion de un metodo con el objeto 
const obj ={}
a.call(obj)

//Anidar Funciones --> nested functions