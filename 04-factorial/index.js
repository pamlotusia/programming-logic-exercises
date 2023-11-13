let number = 5

function calculateFactorial(number) {
  let factorial = 1
  for (let i = 1; i <= number; i++) {
    if (number <= 0) {
      return (factorial = 1)
    } else {
      factorial *= i
    }
  }
  return factorial
}

console.log(calculateFactorial(number))
