const array1 = [1, 2, 3, 4, 5]
const array2 = [2, 3, 4, 5, 6]

const product = array1.map((element, index)=> element * array2[index])
console.log(product)