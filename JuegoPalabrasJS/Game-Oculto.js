

/*
Requerimientos del juego de palabras 

- El juego debe tener una palabra oculta 
- El Juego puede dar 2 pista de la palabra 
- El Jugador debe ingresar una suposicion.
- El Juego debe verificar si la suposicion del usuario es Correcta.
- El Juego debe tener un numero limitado de intentos.
- El juego debe terminar cuando el usuario ingresa la palabra o pierda los intentos.l  

*/
let lifes = 5; //Intentos permitidos al jugador
let vida = document.getElementById( "vida" );
let lifeArray=["❤️","❤️","❤️","❤️","❤️"];//Arreglo para mostrar las vidas restantes"
vida.innerHTML =lifeArray.join(' ')
let ganaste=document.getElementById("ganaste");
let palabraCompleta=document.getElementById("complete")
let complete=[];//Iniciamos la cantidad de letras para validar al completar el juego

const word = "gato"; //Palabra secreta
const cantPalabra = word.length //length sacamos la cantidad de letras
console.log(`Nuestra palabra secreta contiene  ${cantPalabra} letras`)//Imprimi la cantidad de Palabras


function validarLetra(){

//logica para crear el arreglo con las letras de la palabra.

    let i=0; //Inicializamos
    const letras=[]; //Creamos el nuevo arreglo en Blanco
    
    while(i<cantPalabra)
    {
    //console.log(word[i]);
        letras.push(word[i]);//Insertar la palabra en la posicion del arreglo
        i++;
    }
    console.log(letras);

    let palabra= document.getElementById('letra').value  // ingresamos la palabra por el html con su respectivo id
    let validation1=cantPalabra+1 //Validacion de cantidades palabras para restar vidas.

//iteracion de validacion de  las letras, si encuentra la letra o no 

let j = 0;
    while (j<= cantPalabra) {
        if(letras[j]==palabra)
            { 
                complete[j]=palabra;  
            }   
        else
            {
                validation1--;
            } 
    j++;
    }
    palabraCompleta.innerHTML=complete.join(' ')
//validacion de arreglos true or false
 
var isEqual = letras.length === complete.length &&
            letras.every((value, index) => value === complete[index])
console.log(isEqual);

if(isEqual===true){
    ganaste.innerHTML= "¡Felicitaciones! Has Ganado "
}
else{
    
}


//Validacion de Vidas    
   if(lifes<=1){
    vida.innerHTML =" ❌ Game Over ❌"
    console.log('GameOver')
    }else{
        if(validation1==0){
        lifes--;
        console.log(`Perdiste una vida te quedan ${lifes}`)
        lifeArray.pop()
        vida.innerHTML =lifeArray.join(' ')//join(' ') separa el array con el campo que quiera defini en este caso espacios
    }
    else{
        vida.innerHTML =lifeArray.join(' ')
    }
    }

    
}

    