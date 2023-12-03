const ol = document.querySelector('ol')

function changeColor(event){
  event.target.style.backgroundColor = 'red'
}

ol.addEventListener('click', changeColor)