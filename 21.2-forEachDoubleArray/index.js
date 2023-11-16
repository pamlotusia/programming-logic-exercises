function doubleArray(array){
  let duplicateArray = []

  array.forEach((number)=>{
    duplicateArray.push(number *2)
  })

  return duplicateArray
}

let array = [1,2,3]
console.log(doubleArray(array))