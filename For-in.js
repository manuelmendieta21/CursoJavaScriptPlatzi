//For in iterar las propiedades de un objeto, en el tiempo de ejecutcion
//de la aplicacion 
let user={
    id:1,
    names:'Chanchito Feliz',
    age:25,
};
//itera dentro del elemento objeto
for (let prop in user ){
    console.log(prop, user[prop])
}

//Muy parecido pero por recomendaciones hacer for in
let animales =['Chanchito Feliz', 'Dragon','Canguro'];
for(let indice in animales){
    console.log(indice, animales[indice])
}