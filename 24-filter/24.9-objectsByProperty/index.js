let people = [
  { age: 19, name: 'pedro', weight: 90},
  { age: 17, name: 'angel' },
  { age: 18, name: 'carla', weight:60 },
  { age: 16, name: 'matheus' },
  { age: 22, name: 'robert'}
]

function findProperty(arr){
  return arr.filter((obj)=>{
    if(obj.weight){
      return true
    }
  })
}

console.log(findProperty(people))