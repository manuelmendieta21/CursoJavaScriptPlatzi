


//find ()
const numbers =[5,10,15,20]
let sum = numbers.find(number => number > 10)
console.log(numbers)
console.log(sum) // 15

//findIndex()
const randomNumbers=[6,14,27,56]
const indexNumber = randomNumbers.findIndex(num => num > 50)

//finIndex() devuelve el índice del primer elemento que cumple con la condición dada. 
//Si no encuentra ningún elemento que cumpla con la condición, devuelve -1.

console.log(randomNumbers)
const winningParticipants = [
    { id: 1, name: 'Jennifer', ticketNumber: 1 },
    { id: 8, name: 'Michael', ticketNumber: 8 },
    { id: 15, name: 'Emily', ticketNumber: 15 },
    { id: 47, name: 'Charlie', ticketNumber: 47 }
  ]
  
  function findWinnerByName (name) {
    const winner = winningParticipants.find(participants => participants.name === name)
    return winner || 'No winner found with that name.'
  }
  
console.log(findWinnerByName('Michael'))