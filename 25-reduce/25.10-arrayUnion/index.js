const array = [1,2,2,3,4,4]
const array2 = [4,5,6,7,8,8,9]

function arrayUnion(arr, arr2){
  // making an empty array and push elements one by one
  const union = []
  arr.forEach(el => union.push(el))
  arr2.forEach(el => union.push(el))

  // making the reduction properly
  const unitedAndUnique = union.reduce((acc, curr)=> {
    if(!acc.includes(curr)){
      acc.push(curr)
    }
    return acc
  }, [])
  return unitedAndUnique
}

console.log(arrayUnion(array, array2))