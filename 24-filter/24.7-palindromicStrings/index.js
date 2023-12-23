const strings = ['ana', 'banana', 'chair', 'arara', 'frozen']

function palindromic(arr){
  return arr.filter((word) => {
    let temporary = word.split('')
    let reverse = temporary.reverse()
    temporary = reverse.join('')

    if(word === temporary){
      return true
    }
  })
}

console.log(palindromic(strings))