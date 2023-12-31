function toLowerCurrency(arr, currency){
  return arr.reduce((acc, curr)=> {
    curr = curr / currency
    acc.push(curr.toFixed(2))
    return acc
  }, [])
}


const reais = [10, 20 ,30, 40 ]
const argentineCurrency = 0.0060 // 31/12/2023 
const unitedStatesCurreny = 4.85

console.log(toLowerCurrency(reais, argentineCurrency))
console.log(toLowerCurrency(reais, unitedStatesCurreny))
