const ol = document.querySelectorAll('ol *')

ol.forEach((item)=>{
  item.addEventListener('click', changeColor)

  function changeColor(e){
    ol.forEach((item)=>{
      item.classList.remove('ativo')
    })
    e.target.classList.add('ativo')
  }
  
})