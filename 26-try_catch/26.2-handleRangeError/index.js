try{
  let array = []
  array.length = array.length -5
} catch(e){
  console.log(`${e.name}: ${e.message}`)
}