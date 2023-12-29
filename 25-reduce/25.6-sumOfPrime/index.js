
function sumOfPrime(arr){
  return arr.filter((n) => {
    let count = 0
    for(let i = 1; i<=n; i++){
      if(n % i == 0){
        count++
      }
    }
    if(count <=2){
      console.log(n)
      return true
    }
    
  })
  .reduce((acc, curr)=>{
    acc+=curr
    return acc
  })
}

console.log(sumOfPrime(numbers))