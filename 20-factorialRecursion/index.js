function recursiveFactorize(number){
  if(number < 0){
    return -1
  } else if(number == 0){
    return 1
  } else{
    return (number * recursiveFactorize(number -1))
  }
}

console.log(recursiveFactorize(5))