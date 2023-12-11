const numbers = [1,2,3,4,6]
const stringSquare = numbers.map((number)=> {
  let square = number * 2
  return String(square)
})
console.log(stringSquare)