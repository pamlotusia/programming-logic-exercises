let images = document.querySelectorAll('img')

document.body.addEventListener("click", (e)=>{
  if(e.target.tagName === 'IMG'){
    openImage(e.target)
  }
})

function openImage(image){
  images.forEach((img)=>{
    img.classList.remove('ativo')
  })
  image.classList.add('ativo')
}