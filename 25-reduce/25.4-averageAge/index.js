const ages = [{age: 10}, {age: 20}, {age: 30}]

function averageAge(arr){
  return arr.reduce((acc, curr)=> {
    curr = curr.age
    acc+= curr
    return acc
  }, 0)/arr.length
}

console.log(averageAge(ages))