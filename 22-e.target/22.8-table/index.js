let table = document.querySelector('table')

table.addEventListener('click', function(event){
  if(event.target.tagName === 'TD'){
    const rowIndex = event.target.parentElement.rowIndex
    const cellIndex = event.target.cellIndex

    console.log(`Célula clicada na linha ${rowIndex+1}, coluna${cellIndex+1}`)
  }
})