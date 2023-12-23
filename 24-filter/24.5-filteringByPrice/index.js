const products = [
  { obj: 'laptop', price: 600 },
  { obj: 'nail polish', price: 5 },
  { obj: 'book', price: 10 },
  { obj: 'wash machine', price: 600 },
  { obj: 'tv', price: 400 }
]

function highPrice(arr) {
  return arr.filter(obj => {
    if (obj.price > 300) {
      return true
    }
  })
}

console.log(highPrice(products))