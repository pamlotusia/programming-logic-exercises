function squareAndSum(array){
  let sum = 0
  array.forEach((number)=>{
    number = number * number
    sum += number
  })
  return sum
}

console.log(squareAndSum([2,3])) //13