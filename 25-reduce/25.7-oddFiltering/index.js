const numbers = [1,2,3,4,5,6,7]

function odd(arr){
  return arr.reduce((acc, curr) => {
    if(curr % 2 !== 0){
      acc.push(curr)
    }
    return acc 
  }, [])
}

console.log(odd(numbers))