// el Contexto de Scope permite buscar  elementos siempre y cuando estos  estén dentro del árbol de elementos del componente abajo hacia arriba
// y no de arriba hacia abajo que no permitira acceder a los elementos. tambien deben estar definido si no generara error por que no existe la variable.

const globalVariable='😆'

const localVariable2='🤪'

function localOne(){
    console.log('Global 1:', globalVariable )
    let localVariable='🥹'
    
    console.log('Local 1:', localVariable)

    function localTwo(){
        const carrot='🍓'
     
        console.log('Local 2:', carrot)
        function localTree(){
            
            console.log('Local 3:',localVariable2)
        }
        localTree()
    }
    
}

console.log(localOne())