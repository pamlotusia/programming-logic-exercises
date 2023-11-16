let array = [1,2,3,4,5]
array.forEach((element) => {
  console.log(element)
})

array.forEach((element, index)=>{
  console.log(`${element} is in position ${index}`)
})

array.forEach((element, index, array)=>{
  console.log(`${element} is in position ${index} and makes part of the array ${array}`)
})

// using array of objects 
let arrayObjects = [{name: 'Pam'}, {name: 'Paul'}, {name: 'Peter'}, {age: 21}]

// because we are accessing an object by object in this array, we need to describe which property we want to access too. Otherwise it going to show 'object Object'
// of course, all the objects need to have the same key to be accessed, or it going to return 'undefined' on the one that doesn't have it. 
arrayObjects.forEach((element)=>{
  console.log(`current element ${element}`)
})
arrayObjects.forEach((element)=>{
  console.log(`current element ${element.name}`)
})