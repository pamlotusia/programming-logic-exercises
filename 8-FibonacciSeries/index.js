function fibonacci() {
  const n = 10
  let sum = []
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      sum.push(i)
    } else {
      sum.push(sum[i - 1] + sum[i - 2])
    }
  }
  return sum
}

console.log(fibonacci())
