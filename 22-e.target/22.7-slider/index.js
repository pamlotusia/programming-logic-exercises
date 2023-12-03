let slider = document.querySelector('input')

function show(element){
  let content = element.value
  console.log(content)
}


slider.addEventListener('touchend', ()=>{
  show(slider)
})