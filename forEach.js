let frutas=['🍎', '🍌', '🍓']

console.log(frutas.length)

for (i=0; i<=frutas.length - 1 ; i++){
    console.log(frutas[i])
}

/* for of */
let fruta=0;
console.log("for of")
for (fruta of frutas){
    console.log(fruta)
}

/* forEcah arrow function  */
console.log("forEachArrow")
frutas.forEach((fruta) => {
    console.log(fruta)
})

/* forEach function  */
console.log("forEachFunction")
frutas.forEach( function rellamado(NuevaFrutaOriginal,index,original){
    console.log(NuevaFrutaOriginal)
})
