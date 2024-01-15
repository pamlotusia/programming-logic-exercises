function bigggerThanFour(word){
  if(word.length < 4){
    throw new Error('This word is too short')
  } else {
    console.log(`The word is ${word}`)
  }
}

// bigggerThanFour('hi') -> even without try..catch block the error occurs when using throw new Error()

try{
  bigggerThanFour('hi')
} catch(e){
  console.log(e.message)
}