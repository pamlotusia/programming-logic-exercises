const table = document.querySelector('table')
const hiddenWord = document.querySelector('#hidden-word')
const score = document.querySelector('#score span')
let scoreNumber = parseInt(score.textContent)
const changes = document.querySelector('#changes span')
let changesNumber = parseInt(changes.textContent)
let creatingWord = document.querySelector('#word')
let arrayCreatingWord = creatingWord.textContent.split('')

// word chosen
const word = 'morning'
hiddenWord.textContent = word
hiddenWord.style.visibility = 'hidden'
let arrayWord = word.split('')

// styling with underscore
for (let i = 0; i < arrayWord.length; i++) {
  arrayCreatingWord.push('_ ')
}
creatingWord.textContent = arrayCreatingWord.join('')

// board game
table.addEventListener('click', function (event) {
  let letter = event.target.textContent
  if (event.target.tagName === 'TD') {
    let foundIndexes = []

    // Find all occurrences of the letter in the hidden word
    arrayWord.forEach((char, index) => {
      if (char == letter) {
        foundIndexes.push(index)
      }
    })

    if (foundIndexes.length > 0) {
      foundIndexes.forEach(index => {
        arrayCreatingWord[index] = letter
      })

      let showWord = arrayCreatingWord.join('')
      creatingWord.textContent = showWord

      if (creatingWord.textContent === word) {
        alert(`You won! The word is ${word}`)
      }
    } else {
      scoreNumber++
      score.textContent = scoreNumber
      changesNumber--
      changes.textContent = changesNumber
      if (scoreNumber == 6) {
        alert(`You loose. The word was ${word}`)
      }
    }
  }
})
