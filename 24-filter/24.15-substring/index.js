const phrases = ['ecstatic', 'happy', 'melancholy', 'unhappy', 'content', 'happiness', 'apprehensive', 'happier','elated']

function filterSubstring(arr){
  return arr.filter((word)=>{
    const substring = 'happ'
    if(word.includes(substring)){
      return true
    }
  })
}
console.log(filterSubstring(phrases))