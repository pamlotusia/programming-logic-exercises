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

// Conditional Increment:
// Write a function that, given an array of numbers, increments odd values by 1 and even values by 2. Use forEach and thisArg to allow the user to specify the context object.