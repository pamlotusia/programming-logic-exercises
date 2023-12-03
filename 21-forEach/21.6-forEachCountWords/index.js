function countWords(array) {
  let totalWords = 0
  let totalByPhrase = {}

  array.forEach((phrase, index) => {
    let splitPhrase = phrase.split(' ')
    let totalWordsByPhrase = splitPhrase.length

    totalWords += totalWordsByPhrase

    totalByPhrase[`sentence${index + 1}`] = totalWordsByPhrase
  })

  return [totalWords, totalByPhrase]
}

let arrayTest = ['hello friend', 'I am so happy for my progress']

console.log(countWords(arrayTest))