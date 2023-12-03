function concatenateArrays(array){
  let concatenate = []
  array.forEach((group)=>{
    group.forEach((element)=>{
      concatenate.push(element)
    })
  })
  array = concatenate
  return array
}

let test = [[1,2,3], [4,5,6], ['hello', 'my name is Pam']]
console.log(concatenateArrays(test))