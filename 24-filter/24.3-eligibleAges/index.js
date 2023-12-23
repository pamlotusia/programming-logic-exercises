let people = [
  { age: 19, name: 'pedro' },
  { age: 17, name: 'angel' },
  { age: 18, name: 'carla' },
  { age: 16, name: 'matheus' },
  { age: 22, name: 'robert'}
]

function overAge(arr){
  return arr.filter((person)=>{
    if(person.age > 18){
      return true
    }
  })
}

console.log(overAge(people))