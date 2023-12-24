const numbers = [2, 3, 1, 6,10]

function greaterThanEverage(arr) {
  return arr.filter((num) => {
    let sum = 0
    arr.forEach(num => {
      sum += num
      return sum 
    })

    let average = sum / arr.length //4.4

    if(num > average){
      return true
    }
  })
}

console.log(greaterThanEverage(numbers))