const number = [123]
const digit = number.toString().split('')

function sumOfDigits(arr){
  return arr.reduce((acc, curr)=> {
    curr = Number(curr)
    return acc+=curr
  }, 0)
}

console.log(sumOfDigits(digit))