const obj1 = {desc:'thing 1', value: 2}
const obj2 = {desc:'thing 2', value: 3}
const obj3 = {desc:'thing 3', value: 4}

const test = Object.assign({}, obj1, obj2, obj3)

console.log(test)