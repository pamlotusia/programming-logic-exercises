// first: to verify the string using regexp to clean and take out the dots and characters
// second: loop the cleaned array, calculate the next number and increase it
// third: redo another loop and increase the next number

let number = '111444777'
let splitNumber = number.split('.')
let arrayVerified = splitNumber.join('')

function checkCpf(array) {
  let validationNumber = [10,9,8,7,6,5,4,3,2]
  let cpfVerified = []
  let sum = 0

  // first number validation
  for (let i = 0; i < array.length; i++) {
    for(let j = 0 ; j < validationNumber.length; j++){
      let newNumber = array[i] * validationNumber[j]
      sum += newNumber
      
    }
    console.log(sum)
    
  }

  let firstNumber = sum % 11

  if (firstNumber < 2) {
    firstNumber = 0
  } else {
    firstNumber = firstNumber - 8
  }
  cpfVerified.push(firstNumber)

  // second number validation
  validationNumber = [2,3,4,5,6,7,8,9,10,11]
  for(let i = 0 ; i < cpfVerified.length; i++){
    sum += parseInt(cpfVerified[i])
    newNumber = 
    console.log(sum)
  }

  console.log(cpfVerified)
}

console.log(checkCpf(arrayVerified))

console.log(45 % 11)
