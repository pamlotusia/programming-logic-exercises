const obj1 = {name:'thing 1', value: 1}
const obj2 = {color:'blue', qty: 2}
const obj3 = {desc:'nothing', extra: 'available'}

function union(arr){
  return arr.reduce((acc, curr) => {
    acc+= curr.key()
    return acc
  }, {})
}

console.log(union(Array(obj1, obj2, obj3)))