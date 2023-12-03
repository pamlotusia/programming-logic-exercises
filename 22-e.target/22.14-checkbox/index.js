const checkbox = document.querySelector('input')
let message = document.querySelector('#message')

message.textContent = 'Empty input'

checkbox.addEventListener('click', changePhrase)

function changePhrase(e){
  if(e.target.checked){
    message.textContent = 'You checked the input'
  } else {
    message.textContent = 'Empty input'
  }
}