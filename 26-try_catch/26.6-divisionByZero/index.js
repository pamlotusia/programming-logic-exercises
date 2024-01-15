try {
  console.log(8 / 0)
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
