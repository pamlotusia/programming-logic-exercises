// prime numbers are those which are only divisible by one or by itself

function primeNumber(number) {
  let count = 0
  for (let i = 1; i <= number; i++) {
    let divide = number % i
    if (divide === 0) {
      count++
      console.log(i)
    }
  }
  if (count > 2) {
    console.log('the number is not a prime number', count)
  } else {
    console.log('this is a prime number', number)
  }
}

primeNumber(9)
