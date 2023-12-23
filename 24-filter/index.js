// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}
console.log(array.filter(isPrime)) // [2, 3, 5, 7, 11, 13]

// **********************************
// Filtering invalid entries from JSON
// The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

let invalidEntries = 0

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false
}

const arrByID = arr.filter(filterByID)

console.log('Filtered Array\n', arrByID)
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries =', invalidEntries)
// Number of Invalid Entries = 5

//Searching in array
// example uses filter() to filter array content based on search criteria.
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 * using toLowerCase() both to el and query to make them low and ensure the search will work even if el is in capital or vice versa
 */
function filterItems(arr, query) {
  return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()))
}

console.log(filterItems(fruits, 'ap')) // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')) // ['banana', 'mango', 'orange']

// **********************************
// Using the third argument of callbackFn
// The array argument is useful if you want to access another element in the array, especially when you don't have an existing variable that refers to the array. The following example first uses map() to extract the numerical ID from each name and then uses filter() to select the ones that are greater than its neighbors.
// The array argument is not the array that is being built — there is no way to access the array being built from the callback function.
const names = ['JC63', 'Bob132', 'Ursula89', 'Ben96']
const greatIDs = names
  .map(name => parseInt(name.match(/[0-9]+/)[0], 10))
  .filter((id, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx > 0 && id <= arr[idx - 1]) return false
    if (idx < arr.length - 1 && id <= arr[idx + 1]) return false
    return true
  })
console.log(greatIDs) // [132, 96]

// **********************************
// Using filter() on sparse arrays
// filter() will skip empty slots.
console.log([1, , undefined].filter(x => x === undefined)) // [undefined]
console.log([1, , undefined].filter(x => x !== 2)) // [1, undefined]

// **********************************
// Calling filter() on non-array objects
// The filter() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.
const arrayLike = {
  length: 3,
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'a' // ignored by filter() since length is 3
}
console.log(Array.prototype.filter.call(arrayLike, x => x <= 'b'))
// [ 'a', 'b' ]
