const products = [
  { obj: 'laptop', price: 600, qtd: 5},
  { obj: 'nail polish', price: 5, qtd: 100 },
  { obj: 'book', price: 10, qtd: 0 },
  { obj: 'wash machine', price: 600, qtd: 0 },
  { obj: 'tv', price: 400, qtd: 6}
]

function isInStock(arr){
  return arr.filter((prod)=>{
    if(prod.qtd > 0){
      return true
    }
  })
  .map((el)=> {
    return el.obj
  }) //way to get onlythe specified property from the new array filtered
}

console.log(isInStock(products))