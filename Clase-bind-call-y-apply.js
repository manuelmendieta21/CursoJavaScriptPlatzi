

const owner = 'Lucy'
const address = 'Avenue 123'


function dogGreeting(owner,address){
    console.log(`hi, im  ${this.dogName} and i live with ${owner} and Address ${address}`)
}

const newHouse = {
    dogName:'Coconut'
}

//hago el llamado de la funcion, pero debo pasarle los parametros ()
dogGreeting.call(newHouse,owner,address) // llamada a la función con call para que use las variables del objet

const necessaryValues =[owner,address]
dogGreeting.apply(newHouse,necessaryValues) //aplico el metodo apply para que tome los valores de owner y direccion

const bindinWithBind = dogGreeting.bind(newHouse,owner,address)
bindinWithBind()
//console.log(bindinWithBind)

//contextos de ejecucion