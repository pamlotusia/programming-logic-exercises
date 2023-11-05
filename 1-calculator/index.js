let number1 = document.querySelector('#number-1')
let number2 = document.querySelector('#number-2')
const btn = document.querySelector('#equal')
let result = document.querySelector('#result')
let operations = document.querySelectorAll('.operation')
let selectedOperation 

function sum(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function divide(a, b) {
  return a / b
}

function multiply(a, b) {
  return a * b
}

//verify operation selected
operations.forEach(operationButton => {
  operationButton.addEventListener('click', () => {
    selectedOperation = operationButton.textContent
  })
})

btn.addEventListener('click', () => {
  let number1Value = parseFloat(number1.value)
  let number2Value = parseFloat(number2.value)

  let operationResult

  if (selectedOperation === '+') {
    operationResult = sum(number1Value, number2Value)
  } else if (selectedOperation === '-') {
    operationResult = subtract(number1Value, number1Value)
  } else if (selectedOperation === '/') {
    operationResult = divide(number1Value, number2Value)
  } else if (selectedOperation === '*') {
    operationResult = multiply(number1Value, number2Value)
  }

  result.value = operationResult
})
