const numbers = [1,2,3,4,5]

function sumSquares(arr){
  return arr.reduce((acc, curr) =>{
    return acc += curr * curr
  }, 0)
}

console.log(sumSquares(numbers))