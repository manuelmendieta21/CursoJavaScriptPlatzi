let matriz=[ 
    [1,2,3,4,5],
    [6,7,8,9,0]
]

/*
// Recorrido de Matriz por posicion.
let almacenamiento = matriz[1][1]
console.log(almacenamiento)


// Recorridos de Matiz for of 
for (matriz of matriz){
    console.log(matriz);
}



nuevamatriz= matriz.forEach((fila,filainde) =>{
 fila.forEach((elemento,columnaIndex ) =>
    {
        console.log('fila ' + filainde)
        console.log('columna ' + columna)
        console.log('elemento'+ elemento)
        console.log(' ----------------')
    }
)
})
*/
matriz.forEach((matrix)=>{console.log(matrix)})

//En este ejemplo, el bucle externo recorre {1} cada fila de la matriz, mientras que el bucle interno {2} recorre cada elemento dentro de una fila específica.
//Puedes usar otros bucles para iterar sobre una matriz, como un bucle while o un bucle for...of. 
//También puedes utilizar el método forEach() de los arrays para iterar sobre una matriz, pero tendrás que anidar dos llamadas a 
//forEach() para iterar sobre todos los elementos de la matriz.

console.log("<---------- Filas y Columnas-------------->")
matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columnaIndex) => {
      console.log('Fila ' + filaIndex)
      console.log('Columna ' + columnaIndex)
      console.log('Elemento ', elemento)
      console.log('')
    })
  })

