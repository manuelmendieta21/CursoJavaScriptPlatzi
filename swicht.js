
//La declaración switch evalúa una expresión, comparando  el valor de esa expresión con una instancia case, 
//y ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

/*
switch (expresión) {
    case valor1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      [break;]
    case valor2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      [break;]
    ...
    case valorN:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      [break;]
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      [break;]
  }*/

let expresion=1;

switch(expresion){
    case expresion =1:
        console.log("es igual a 1 ")
    break;
    case 2:
        console.log("es igual a 2")
    break;
    default:
        console.log("se fue por default")
        break;
}
