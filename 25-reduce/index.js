const array = [1, 2, 3, 4]

const sumNumbers = array.reduce((accumulator, currentValue) => {
  // you can see it running step by step. The index 0 is the first value of accumulator
  console.log(
    `The accumulator is ${accumulator} and the current value of this array is ${currentValue}`
  )

  return accumulator + currentValue
})
console.log('final result', sumNumbers)

// Now, using initialValue as a parameter inside the callbackFn
const initialValue = 10
const summingWithInitialValue = array.reduce((acc, curr) => {
  // you can see the difference right here. The initialValue became the first value of accumulator
  console.log(
    `The accumulator is ${acc} and the current value of this array is ${curr}`
  )
  return acc + curr
}, initialValue)

console.log('final result ', summingWithInitialValue)

// Shopping Cart, return the total to be paid
const items = [
  { desc: 'pen', qty: 1, price: 3 },
  { desc: 'rule', qty: 2, price: 5 },
  { desc: 'erase', qty: 2, price: 6 }
]

const sumOfItems = items.reduce((acc, curr) => {
  return (acc += curr.qty * curr.price)
}, 0)

console.log(sumOfItems)

// Name counter by initials
const names = ['Joao', 'Maria', 'Laura', 'Jessica', 'Leonardo', 'Mauro', 'Jack']

const inicialLetter = names.reduce((count, name) => {
  const firstLetter = name[0].toLocaleLowerCase()
  if (count[firstLetter]) {
    count[firstLetter]++
  } else {
    count[firstLetter] = 1
  }
  return count
}, {})
console.log(inicialLetter)

// From an array of people objects, return an object with a person counter by age

const people = [
  { name: 'Pamela', age: 21 },
  { name: 'Jennifer', age: 21 },
  { name: 'Paul', age: 20 }
]

const sortingByAge = people.reduce((ageKey, currPerson) => {
  ageKey[currPerson.age] = ageKey[currPerson.age] || []
  ageKey[currPerson.age].push(currPerson.name)
  return ageKey
}, {})

console.log(sortingByAge)

// obter o dobro dos numeros positivos

const numbers = [-10, 0, 2, 4]

const doublePositive = numbers.reduce((acc, n) => {
  if(n > 0){
    acc.push(n * 2)
  }
  return acc
}, [])
console.log(doublePositive)
