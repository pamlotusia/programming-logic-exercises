let message = document.querySelector('#message')
console.log(message)
let count = 0

document.body.addEventListener('click', (event)=>{
  if(event.target.tagName === 'BUTTON'){
    if(count > 0){
      message.textContent = `The button has already been clicked ${count} times.`
    } else {
      message.textContent = `Its's the first click in this button`
    }
    count++
  }
})