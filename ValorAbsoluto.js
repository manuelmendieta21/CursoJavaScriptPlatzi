let numbers=[5, -10, -2, -25, -7]

let newNumbers1=[...numbers];
let abs= newNumbers1.map(Math.abs);
let newNumbers2= abs.sort((a, b) => a - b);


console.log(newNumbers2);


let numero=-15;
let newNumber=Math.abs(numero);
console.log(newNumber);