const celsius = [10, 30 , 40]
const fahrenheit = celsius.map((temperature)=> {
  return (temperature * 9/5) + 32
})

console.log(fahrenheit) //50 , 86, 104