const elements = ['pencil', 'notebook', 'backpack', 'eraser', 'notebook', 'pencil']

function uniqueElements(arr){
  return arr.filter((element) => {
    return arr.indexOf(element)
  })
}

console.log(uniqueElements(elements))
