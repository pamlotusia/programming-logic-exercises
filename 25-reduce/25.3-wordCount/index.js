const words = ['hello world', 'good morning']

function totalOfWords(arr) {
  return arr.reduce((acc, curr) => {
    const words = curr.split(' ')
    return acc + words.length
  }, 0)
}

console.log(totalOfWords(words))
