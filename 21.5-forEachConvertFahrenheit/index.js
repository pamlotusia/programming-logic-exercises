function toFahrenheit(array){
  let fahrenheit = []
  array.forEach((number)=>{
    number = (number * (9/5)) + 32
    console.log(number)
    fahrenheit.push(number)
  })
  return fahrenheit
}

let arrayCelsius = [0, 36, 20] // [32, 96.8, 68]
console.log(toFahrenheit(arrayCelsius))

