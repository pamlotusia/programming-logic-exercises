let array = [60, 0, 20, 2 ,0]

function sort(array){
  const n = array.length

  for(let i = 0; i< n-1; i++){
    for(let j = 0; j< n-1 -i; j++){
      console.log(array)
      if(array[j] > array[j + 1]){
        const temp = array[j]
        array[j] = array[j +1]
        array[j + 1] = temp
      }
    }
  }
  
  return array
}

console.log(sort(array))