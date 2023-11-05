let string = 'Hello, how many vowels are in this sentence?'

function countVowels(phrase) {
  const vowels = 'aeiouAEIOU'
  let qtyVowels = 0
  for (let i = 0; i < phrase.length; i++) {
    if(vowels.includes(phrase[i])){
      qtyVowels++
    }
  }
  return qtyVowels
}

console.log(countVowels(string))