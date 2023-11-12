let array = [50, 100, 7, 0, 6, 99, 1]

function findTheLargestNumber(array) {
  let largestNumber = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i]
    }
  }
  return largestNumber
}

console.log(findTheLargestNumber(array))
