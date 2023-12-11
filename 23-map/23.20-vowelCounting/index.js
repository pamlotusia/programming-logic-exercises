const strings = ['playing', 'for', 'keeps']
const vowelsCount = strings.map(word => {
  let count = 0
  const vowels = 'aeiou'
  word = word.split('')

  word.forEach(letter => {
    if (vowels.includes(letter)) {
      count++
    }
  })

  return count
})
console.log(vowelsCount)
