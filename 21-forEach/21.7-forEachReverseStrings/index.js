let test = ['good', 'technology', 'javascript']

function reverseStrings(array){
  array.forEach((word, index) => {
    let split = word.split('')
    word = split.reverse().join('')
    array[index] = word
  })
  return array
}

console.log(reverseStrings(test))