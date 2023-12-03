// I understood that in this exercise I need to exclude odd numbers and return the array without them. But that wasn't clear, so I made two functions. One returns only even numbers from an array and another that returns only odd numbers.

function filterOdd(array){
  let noOdds = []
  array.forEach((number)=>{
    if(number% 2 == 0){
      noOdds.push(number)
    }
  })
  return noOdds
}

function filterEven(array){
  let noEven = []
  array.forEach((number)=>{
    if(number % 2 != 0){
      noEven.push(number)
    }
  })
  return noEven
}

let array = [1,2,3,4]
console.log(filterOdd(array))
console.log(filterEven(array))
