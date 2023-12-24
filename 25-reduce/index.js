const array = [1,2,3,4]

const initialValue = 0
const sumWithInitial = array.reduce((accumulator, currentValue)=> {
  return  accumulator + currentValue
}
 , initialValue )

console.log(sumWithInitial)