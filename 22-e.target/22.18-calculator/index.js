document.body.addEventListener('click', (e)=>{
  if(e.target.tagName === 'BUTTON'){
    console.log(e.target.textContent)
  }
})
