// first: to verify if the cpf variable are an string or a number, because we need it be an array of numbers to use it into our validation function
// second: loop the cleaned array, calculate the next number and increase it
// third: redo another loop and increase the next number

// function to transform from a string or number to an array
function transformIntoAnArray(cpf) {
  let array
  if (typeof cpf === 'string') {
    let verifyCpf = cpf.split('.')
    let verifiedCpf = parseInt(verifyCpf.join(''))
    // transform into an array
    array = Array.from(String(verifiedCpf), Number)
  } else if (typeof cpf === 'number') {
    array = Array.from(String(cpf), Number)
  }
  return array
}

// function to validate the CPF sequence
function validationCpf(cpf) {
  // generating the first number
  let toMultiply = [10, 9, 8, 7, 6, 5, 4, 3, 2]
  let sum = 0
  for (let i = 0; i < toMultiply.length && i < cpf.length; i++) {
    sum += toMultiply[i] * cpf[i]
    console.log(sum)
  }

  let firstNumber = sum % 11
  if (firstNumber < 2) {
    firstNumber = 0
  } else {
    firstNumber = 11 - firstNumber
    console.log(`first number ${firstNumber}`)
  }
  cpf.push(firstNumber)

  // generating the second number
  toMultiply = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  sum = 0
  for (let i = 0; i < toMultiply.length && i < cpf.length; i++) {
    sum += toMultiply[i] * cpf[i]
    console.log(sum)
  }
  let secondNumber = sum % 11
  if (secondNumber < 2) {
    secondNumber = 0
  } else {
    secondNumber = 11 - secondNumber
  }
  cpf.push(secondNumber)

  return cpf
}

// testing
let cpf = '111.444.777'
let cpf2 = 111444777

let firstCpf = transformIntoAnArray(cpf)
console.log(validationCpf(firstCpf))

let secondCpf= transformIntoAnArray(cpf2)
console.log(validationCpf(secondCpf))
