/*

for in  -----> objetos 


propiedades = valor

array, string 

item

for(variable in objeto){
codigo
}
console.log(variable)
*/ 

const listaDeCompra ={
    manzana:5,
    peras:3,
    naranja:2,
    uva:1
}

for (fruta in listaDeCompra){
    console.log(fruta)
}

/* con declarar la fruta  ira a iterar en las propiedades del objeto */
for (fruta in listaDeCompra){
    console.log(`${fruta} :${listaDeCompra[fruta]}`);
}


const  validacion = (false || true)
console.log(validacion)

let primera=1;
let segunda=2;

console.log(primera,segunda)

