function calcFactorial(n) {
  // verifying if N isn't negative
  if (n < 0) {
    return 'It is not possible to calculate factorial of a negative number'
  }
  // creating an array from 1 to N
  const sequence = Array.from({ length: n }, (_, index) => index + 1)

  const factorial = sequence.reduce((acc, currN) => acc * currN, 1)

  return factorial
}

console.log(calcFactorial(3))
