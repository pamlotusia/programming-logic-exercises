const products =[
  {desc: 'cap', value: 5},
  {desc: 'lip balm', value: 5},
  {desc: 'pants', value: 10},
  {desc: 'laptop', value: 50}
]

function cardShopping(arr){
  return arr.reduce((acc, curr)=> {
    acc+= curr.value
    return acc
  }, 0)
}

console.log(cardShopping(products))