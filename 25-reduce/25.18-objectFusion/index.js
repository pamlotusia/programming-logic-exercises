const obj1 = {desc:'thing 1', value: 2}
const obj2 = {desc:'thing 2', value: 3}
const obj3 = {desc:'thing 3', value: 4}

function reduceObj(obj1, obj2, obj3){
  const array = [obj1, obj2, obj3]

  const NewObject = {}

  return array.reduce((acc, curr) => {
    NewObject.push(curr)
    return NewObject
  }
  , {})
  
}
console.log(reduceObj(obj1,obj2, obj3))