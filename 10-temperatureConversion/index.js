function toFahrenheit(temperature) {
  temperature = (temperature * 9) / 5 + 32
  return temperature
}

function toCelsius(temperature){
  temperature = (35 - 32) *5/9
  return temperature
}

console.log(toFahrenheit(35))
console.log(toCelsius(35))