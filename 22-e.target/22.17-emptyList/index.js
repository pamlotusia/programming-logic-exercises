const ul = document.querySelector('ul')
const btn = document.querySelector('button')
const input = document.querySelector('input')

document.body.addEventListener('click', (e)=>{
  if(e.target.tagName === 'BUTTON'){
    addItem()
  }
})

function addItem(){
  let value = input.value
  let item = document.createElement('li')
  item.textContent = value
  ul.appendChild(item)
}
