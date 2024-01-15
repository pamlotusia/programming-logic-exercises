try {
  let invalidJSON = JSON.parse('{"key": "value", "missingQuotes: "value"}')
  console.log(invalidJSON)
} catch (e) {
  console.log(e.name + ': ' + e.message)
}
