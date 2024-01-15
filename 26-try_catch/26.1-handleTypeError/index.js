// Exercise 1: Handle a TypeError
try {
  let num = 1
  num.toUppercase()
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}
