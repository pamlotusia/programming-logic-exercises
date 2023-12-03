const ul = document.querySelectorAll('ul *')

ul.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    console.log(e.target.textContent)
  })
})