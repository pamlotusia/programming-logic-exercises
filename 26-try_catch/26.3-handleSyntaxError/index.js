try{
console.log(eval('good morning'))
} catch(e){
  console.log(`${e.name}: ${e.message}`)
}