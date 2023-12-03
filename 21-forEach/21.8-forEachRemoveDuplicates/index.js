function removeDuplicates(array) {
  let noDuplicates = []
  array.forEach(element => {
    if (!noDuplicates.includes(element)) {
      noDuplicates.push(element)
    }
  })

  array = noDuplicates

  return array
}

let test = [1, 1, 2, 2, 3, 4, 10, 10]

console.log(removeDuplicates(test))
