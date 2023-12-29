const objects = [
  { color: 'red' },
  { color: 'white' },
  { color: 'blue' },
  { color: 'red' },
  { color: 'white' },
  { color: 'brown' },
  {cor: 'verde'} //only to test if the function prevents other keys
]

function filterUniqueObj(arr, property){
  const uniqueValues = new Set()

  return arr.filter( obj => {
    const value = obj[property]

    if(typeof value !== 'undefined' && !uniqueValues.has(value)){
      uniqueValues.add(value)
      return true
    }

    return false
  })
}

console.log(filterUniqueObj(objects, 'color'))