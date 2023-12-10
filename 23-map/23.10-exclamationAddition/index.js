const array1 = [1, 4, 9, 16]

const map1 = array1.map(n => n * 2)
console.log(map1) //2, 8, 18, 32

// square numbers
const numbers = [1, 4, 9]
const roots = numbers.map(number => Math.sqrt(number))
console.log(numbers) //the parent array still unchanged
console.log(roots) // 1, 2, 3

// Using map to reform objects in an array
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
]

const reformattedArray = kvArray.map(({key, value})=> ({[key]: value})) // take notes: the parameter need to be the same shape as the return value

console.log(kvArray) 
// [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 }
// ]

console.log(reformattedArray)
// [{1: 10}, {2: 20}, {3: 30}]

console.log(['1', '2', '3'].map((n)=> parseInt(n)))

// Unlike parseInt(), Number() will return a float or (resolved) exponential notation
console.log(["1.1", "2.2e2", "3e300"].map(Number))

// mapped array contains undefined
const numbers2 = [1, 2, 3, 4]
const filteredNumbers = numbers2.map((num, index) => {
  if (index < 3) {
    return num
  }
})
console.log(filteredNumbers) // 1, 2, 3, undefined

// Side-effectfull mapping
// The callback can have side effects.
const cart = [5, 15, 25]
let total = 0
const withTax = cart.map((cost) => {
  total += cost
  return cost * 1.2
})
console.log(withTax)
console.log(total)