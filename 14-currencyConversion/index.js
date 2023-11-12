// Because dollar values more than real, when we convert from real to dollar we divide, and to convert from dollar to real we multiply
// Today is 12/11/2023 and the Brazilian Real is worth 0.20 dollars

function convertToDollar(number){
  let exchangeRate = 0.20
  let conversion = number / exchangeRate
  console.log(conversion)
  return
}

function convertToReal(number){
  let exchangeRate = 0.20
  let conversion = number * exchangeRate
  console.log(conversion)
  return
}

let test = convertToDollar(10)
let test2 = convertToReal(10)