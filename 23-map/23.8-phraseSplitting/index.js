const phrases = ['hello word', 'good morning', 'nice job']
const words = phrases.map((word) => {
  return word.split(' ')
})

console.log(words)