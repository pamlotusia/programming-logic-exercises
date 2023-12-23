let numbers = []
for(let i = 1; i< 100; i++){
  numbers.push(i)
}
console.log(numbers)

function divisibleByThreeAndFive(arr){
  return arr.filter((num)=>{
    if(num % 3 === 0 && num % 5 === 0){
      return true
    }
  })
}

console.log(divisibleByThreeAndFive(numbers))