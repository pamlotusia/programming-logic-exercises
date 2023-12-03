var myObject = {
  value: 42,
  logValue: function(element) {
    console.log(this.value + element);
  }
};

var arr = [1, 2, 3];

// Without thisArg - the callback function will use the global context (or undefined in strict mode)
arr.forEach(myObject.logValue); // Result: NaN

// With thisArg - the callback function will use myObject as context
arr.forEach(myObject.logValue, myObject); // Result: 43, 44, 45

// In the first case, since a thisArg was not provided, the callback function tries to access this.value, which is undefined in the global context, resulting in NaN. In the second case, by providing myObject as thisArg, the callback function has access to the correct context and works as expected.

// Write a function that takes an array of numbers and increments each element by a specified value. Use forEach and allow the user to specify the increment value using thisArg.

function incrementArrayValues(incrementAmout){
  this.forEach(function(element, index, array){
    array[index] = element + incrementAmout
  }, this)
}

let numbers = [1,2,3,4,5]
incrementArrayValues.call(numbers, 2)
console.log(numbers)


// Exercise 2: Filter Odd Numbers
// Write a function that filters out odd numbers from an array. Use forEach and thisArg to specify an object that contains a method for checking if a number is odd.










// Conditional Increment:
// Write a function that, given an array of numbers, increments odd values by 1 and even values by 2. Use forEach and thisArg to allow the user to specify the context object.
console.log('######################')
function conditionalIncrement(array){
  if(this.value % 2 == 0){
    return this.value + 2
  } else {
    return this.value + 1
  }
}

let array = [1,2,3,4]
console.log(array.forEach(conditionalIncrement, ))