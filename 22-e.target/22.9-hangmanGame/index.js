const table = document.querySelector('table')
const hiddenWord = document.querySelector('#hidden-word')
const score = document.querySelector('#score span')
let scoreNumber = parseInt(score.textContent)
const changes = document.querySelector('#changes span')
let changesNumber = parseInt(changes.textContent)
let creatingWord = document.querySelector('#word')
let arrayCreatingWord = creatingWord.textContent.split('')

// word chosen
const word = 'palavra'
hiddenWord.textContent = word
// hiddenWord.style.visibility = 'hidden'
let arrayWord = word.split('')

// board game
table.addEventListener('click', function (event) {
  let letter = event.target.textContent
  if (event.target.tagName === 'TD') {


    if (arrayWord.includes(letter)) {

      let index = arrayWord.indexOf(letter)
      arrayCreatingWord.splice(index, 0, letter)

      let showWord = arrayCreatingWord.join('')
      creatingWord.textContent = showWord

      console.log(showWord)
    } else {
      scoreNumber++
      score.textContent = scoreNumber
      changesNumber--
      changes.textContent = changesNumber
      if (scoreNumber == 6) {
        alert('voce perdeu')
      }

      console.log(scoreNumber)
    }
  }
})
