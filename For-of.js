//Recorrer un array o un objeto

let animales=['Chanchito Feliz','Vaca','pollo','perro']

//for of me permite recorre todo el array de mi objet
for(let animale of animales){
    console.log(`Mi animal favorito es ${animale}`) ;

}

//Mediante el ciclo While recorro todo el array mediante el recorrido
// e inicializando el autoincrentador.
let i=0;
while(i<animales.length){
    console.log(animales[i]);
    i++;
}