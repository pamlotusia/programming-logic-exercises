function sortWords(phrase) {
  let splitPhrase = phrase.split(' ')
  let newPhrase = splitPhrase.sort()
  return newPhrase
}

let phrase = 'tudo posso naquele que me fortalece'

console.log(sortWords(phrase))
