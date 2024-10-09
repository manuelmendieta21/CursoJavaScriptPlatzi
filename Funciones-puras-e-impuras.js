//funciones puras

// Side Effects - impuras modifica la funcion
//1. Modificar variables globales
//2. Modificar variables de otros objetos
//3. Solicitudes HTTP
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
//6. Obtener la hora actual

function sum (a,b){
    //funcion pura la misma entrada y la misma salida.
    return a+b;
}

function sum (a,b){
    //funcion se vuelve impura por que modifico con imprimir un mensaje en pantalla.
    console.log("impura")
    console.log('A:',a)
    return a+b;
}

console.log(sum(1,2));

// funcion impura ya que modifica la variable global definida.
let total =0
function sumWithEffect (a){
    total+=a
return a
}
