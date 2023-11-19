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