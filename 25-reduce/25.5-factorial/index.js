function factorial(n){
  return n.reduce((acc, currN)=> {
    acc = currN * acc
    return acc
  }, 1)
}

console.log(factorial([3]))