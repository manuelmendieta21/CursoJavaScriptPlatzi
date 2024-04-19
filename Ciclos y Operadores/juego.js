const NumbertSecret = Math.floor(Math.random()* 10 + 1)


const NumberPlayer = parseInt(prompt("Adivina el numero Secreto entre el 1 al 10"))

console.log(`Este es el numero con el que juegas ${NumberPlayer}`)

if(NumbertSecret==NumberPlayer){
    console.log(`Felicitaciones Ganaste el numero que ingresaste es el mismo ${NumberPlayer}`)
}
else{

alert(`Perdiste Este es el numero con el que tenias que ganar ${NumbertSecret}`)
}


