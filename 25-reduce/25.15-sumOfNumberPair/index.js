const numbers = [1,2,3,4,5,6]

function sumEven(arr){
  const evenNumbers = arr.filter((n) => n % 2 === 0)
  return evenNumbers.reduce((acc, curr)=> acc+= curr ,0)
}

console.log(sumEven(numbers))