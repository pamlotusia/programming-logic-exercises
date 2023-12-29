const array = ['red', 'white', 'blue', 'red', 'white', 'brown']

function filterDistinctValues(arr){
  return arr.filter((value, idx, arr) => arr.indexOf(value) === idx)
}

console.log(filterDistinctValues(array))