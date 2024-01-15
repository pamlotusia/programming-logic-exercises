async function asynchronousFunction(){
  throw new Error('An error occurred in an asynchronous function')
}

asynchronousFunction().catch(error => {
  console.error('error:', error.message)
})