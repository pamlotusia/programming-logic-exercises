try{
  decodeURIComponent('%')
} catch(e){
  console.log(`${e.name}: ${e.message}`)
}