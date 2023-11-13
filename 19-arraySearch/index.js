function arraySearch(array, element) {
  if (array.includes(element)) {
    console.log(array.indexOf(element))
  } else {
    console.log('-1')
  }
  return
}

let array = [1, 2, 3, 4, 5, 6]
arraySearch(array, 3)
arraySearch(array, 7)
