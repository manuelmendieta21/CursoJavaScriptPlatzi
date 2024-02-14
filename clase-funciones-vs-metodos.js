//se pueden crear objetos que llamen funciones dentro de su interior--
//lanzar proyect.js se debe colocar el comando Node validar la version node
// instalada y con el comando node clase-funciones-vs-metodos.js veremos la ejecucion

const rocket  = {
    name:'Falcon 9',
    launchMessage:function launchMessage(){
        console.log('🔥')
    }   }

rocket.launchMessage()    