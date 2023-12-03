const btn = document.querySelector('button')
let count = 0

document.body.addEventListener('click', function(event){
  if(event.target.tagName === 'BUTTON'){
    count++
    console.log(`the button was clicked ${count} times`)
  }
})
