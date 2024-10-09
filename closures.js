/**
 *  Closure: funcion que tiene acceso a variables de ambito extremo,
 *  incluso despues de que esta funcion haya terminado de ejecutarse.
 * 
 *  Ambito Lexico: cada vez que se declara una funcion,
 *  crea su propio ambito lexico, y puede acceder a la variables dentrodel ambito y las variables de ambitos superiores.
 */

function outerFunction(){
    let outerVariable = 'Soy una variable de ambito lexico'

    function innerFunction(){
        console.log(outerVariable)
    }

    return innerFunction()
}

const salid = outerFunction()
salid

function crearContador(){
    let contador = 0;

    return function(){
        contador = contador + 1;
        console.log(contador);
        return contador;
    }
}

const counter1 = crearContador();
counter1()