const btn = document.querySelector('button')
let input = document.querySelector('input')

function content(element){
  let content = element.value
  console.log(content)
}

btn.addEventListener('keypress', function(event){
  // When clicking the submit button within a <form> form, the default behavior is for the page to reload. Therefore, when trying to get the input value and display it in the console, use event.preventDefault() so that the value is not lost.
  // Otherwise, the value just flashes quickly on the screen, precisely because you took the value and reloaded the page immediately afterwards.
  // Of course in this case the form will not be sent.
  event.preventDefault()
  content(input)
})