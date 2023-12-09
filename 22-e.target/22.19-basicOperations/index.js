let num1 = ''
let num2 = ''
let operator = ''
let resultDisplay = document.querySelector('#result')
let equal = document.querySelector('#equal')

// verify if the e.target is a number or an operator
document.body.addEventListener('click', (e)=>{
  if(e.target.classList.contains('number')){
    handleNumberClick(e.target.textContent)
    visor(e.target.textContent)
  } else if (e.target.classList.contains('operator')){
    handleOperatorClick(e.target.textContent)
  }
  
})

function handleNumberClick(number){
  if(!operator){
    num1+= number
    console.log(typeof num1)

  } else {
    num2+= number
  }
  updateDisplay()
}

function handleOperatorClick(op){
  if(num1 !== ''){
    operator = op
  }
}

// shows the current number
function visor(element){
  resultDisplay.value = element
}

// shows the result
function updateDisplay(){
 let result
 if(operator === '+') {
  result = sum(num1, num2)
 } else if (operator === '-'){number
  result = sub(num1, num2)
 } else if (operator === '*'){
  result = multiply(num1, num2)
 } else if( operator === '/'){
  result = divide(num1, num2)
 }

 resultDisplay.value = result

 if(resultDisplay.value === 'undefined'){
  resultDisplay.value = ''
 }
 return result 
}
equal.addEventListener('click', updateDisplay)

// operations
function sum(number1, number2){
  return parseFloat(number1) + parseFloat(number2)
}
function sub(number1, number2){
  return parseFloat(number1) - parseFloat(number2)
}
function multiply(number1, number2){
  return parseFloat(number1) * parseFloat(number2)
}
function divide(number1, number2){
  return parseFloat(number1) / parseFloat(number2)
}
