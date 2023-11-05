let word = 'ana'
let word2 = 'school'

function palindrome(word){
  let splitWord = word.split('')
  let reverseWord = splitWord.reverse().join('')

  if(reverseWord === word){
    console.log(`The word ${word} is a palindrome`)
  } else {
    console.log(`The word ${word} is not a palindrome`)
  }
}

palindrome(word)
palindrome(word2)