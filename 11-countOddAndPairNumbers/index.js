function OddAndEven(array){
  let odd = 0
  let oddArray =[]
  let even = 0
  let evenArray = []
  for(let i = 0; i< array.length; i++){
    if(array[i] % 2 == 0){
      even++
      evenArray.push(array[i])
    } else {
      odd++
      oddArray.push(array[i])
    }
  } return {
    odd: {
      total: odd,
      numbers: oddArray
    },
    even: {
      total: even,
      numbers: evenArray
    }
  }
}

let array = [1,2,3,4,5,6,7]
console.log(OddAndEven(array))