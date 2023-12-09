document.body.addEventListener('click', (e)=>{
  // only the event
  console.log(e)
  // the element which receives the event
  console.log(e.target)
  // throw the target, you can access the properties from the element
  console.log(e.target.tagName)
  // list of style rules, but you can not access specify style properties 
  console.log(e.target.style)
  // it does not work
  console.log(e.target.style.color)
  // but you can specify a style property to change it or use it in a conditional 
  console.log(e.target.style.color = 'yellow')
})

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
