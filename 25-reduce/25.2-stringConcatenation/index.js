const words = ['hello', 'world']

function concatenate(arr){
  return arr.reduce((finalPhrase, currentWord) => finalPhrase + currentWord)
}

console.log(concatenate(words))