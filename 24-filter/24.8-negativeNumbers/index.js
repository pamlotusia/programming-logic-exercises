const numbers = [0, -1, 2, -3, 4, -5, 6]

function negative(arr) {
  return arr.filter(num => {
    if (num < 0) {
      return true
    }
  })
}

console.log(negative(numbers))
