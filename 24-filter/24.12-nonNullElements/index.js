const array = [1, 2, null, 3]

function cleanNull(arr){
  return arr.filter((el)=> {
    if(el !== null){
      return true
    }
  })
}

console.log(cleanNull(array))