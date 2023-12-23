const numbers = [1, 2, 3, 4, 5, 6]

function even(arr) {
  return arr.filter(number => {
    if (number % 2 === 0) {
      return true
    } 
  })
}

const test = even(numbers)
console.log(test)
