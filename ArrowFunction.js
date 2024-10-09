
//ArrowFunction 
const sum = (a, b) => a + b 
console.log(sum(2, 3))


 let name="manuel"

// Arrow explicito explicit
const newGreeting = (name) =>{
    return  `Hi, ${name}!`
    
}


console.log(newGreeting(name))
// Arror  implicito implicit

const newGreetingImplicit2 = name => `Hi, ${name}!`
console.log(newGreetingImplicit2(name))


//Lexical Binding

const finctionalCharacter ={
    name: "Uncle ben",
    messageWithTraditionalFunction : function(message){
        console.log(`${this.name} says: ${message}`)
    
},
    messageWithArrowFunction : (message)=> {
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTraditionalFunction("with great power comes greap responsibility ") 
finctionalCharacter.messageWithArrowFunction("beware of doctor octupos") //-->undefined says: beware of doctor octupos no accede al nombre del objeto anterior.