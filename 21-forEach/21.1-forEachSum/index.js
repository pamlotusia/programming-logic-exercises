let array = [1,2,3]

function sum(array){
  let sum = 0
  array.forEach((number)=>{
    sum += number
  })
  return sum
}

console.log(sum(array))