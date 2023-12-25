const arrays = [[], [1,2,3], [], [4,5,6]]

function nonEmpty(arr){
  return arr.filter((array)=> {
    if(array.length !== 0){
      return true
    }
  })
}

console.log(nonEmpty(arrays))