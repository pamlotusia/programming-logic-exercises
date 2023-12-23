const array = ['under', 'the', 'weather', 'beating', 'around', 'bush']

function specificLength(arr){
  return arr.filter((word) =>{
    if(word.length <= 5){
      return true
    }
  })
}

console.log(specificLength(array))