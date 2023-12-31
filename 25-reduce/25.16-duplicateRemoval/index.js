const values = [1, 1, 2, 3, 3, 'hello', 'hello', 'world']

function removeDuplicate(arr) {
  const noDuplicates = []

  return arr.reduce((acc, curr) => {
    if (!noDuplicates.includes(curr)) {
      noDuplicates.push(curr)
    }
    acc = noDuplicates
    return acc
  }, [])
}

console.log(removeDuplicate(values))
