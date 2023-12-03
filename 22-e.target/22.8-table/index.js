let table = document.querySelectorAll('table *')

table.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    console.log(e)
  })
})