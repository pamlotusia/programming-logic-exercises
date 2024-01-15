function synchronousFunction(){
  throw new Error('An error occurred in the synchronous function')
}

try {
  synchronousFunction() 
} catch(e){
  console.error('error:', e.message)
}