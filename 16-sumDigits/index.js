function sumDigits(number){
  array = Array.from(String(number), Number)
  let sum = 0
  for(let i = 0; i < array.length ;i++){
    sum += array[i]
  }
  return sum
}

let teste1 = console.log(sumDigits(15))