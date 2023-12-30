const words = ['hello', 'avocado', 'beautiful', 'belly', 'welcome']

function sortingWords(arr) {
  return arr.reduce((acc, curr) => {
    const index = acc.findIndex(item => item > curr)

    if (index === -1) {
      acc.push(curr)
    } else {
      acc.splice(index, 0, curr)
    }
    return acc
  }, [])
}

console.log(sortingWords(words))
