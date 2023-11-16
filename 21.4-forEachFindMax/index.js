// I initialized maxValue with the first element value because that makes sure even the negative numbers will be validated right
function maxValue(array){
  let maxValue = array[0]
  array.forEach((value)=>{
    if(value > maxValue ){
      maxValue = value
    }
  })
  return maxValue
}

let array = [-1,-2,-8]
console.log(maxValue(array))