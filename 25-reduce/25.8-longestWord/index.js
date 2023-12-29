const words = ['hello', 'world', 'good', 'morning']

function longestWord(arr) {
  return arr.reduce((acc, currWord) => {
    return currWord.length > acc.length ? currWord : acc
  }, '')
}

console.log(longestWord(words))
