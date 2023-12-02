// make a list
const ul = document.createElement('ul')
document.body.appendChild(ul)

const li1 = document.createElement('li')
li1.textContent= 'item 1'

const li2 = document.createElement('li')
li2.textContent= 'item 2'

ul.appendChild(li1)
ul.appendChild(li2)

function hide(event){
  // event.target refers to the clicked <li> element
  // this is different than event.currentTarget, which wuld refer to the parent <ul> in this context
  event.target.style.visibility = 'hidden'
}

ul.addEventListener('click', hide, false)