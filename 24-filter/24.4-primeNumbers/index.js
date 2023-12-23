let numbers = []
for(let i =1; i<= 100; i++){
  numbers.push(i)
}

function primeNumbers(arr){
  return arr.filter((num) => {
    let count = 0
    for(let i = 1; i <= num; i++){
      if(num % i === 0){
        count++
      }
    }
    
    if(count <= 2){
      return true
    }
  })
}

console.log(primeNumbers(numbers))