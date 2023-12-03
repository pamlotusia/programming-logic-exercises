const table = document.querySelector('table')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  let row = document.createElement('tr')
  table.appendChild(row)
  for (let i = 0; i < 6; i++) {
    let cell = document.createElement('td')
    cell.textContent = 10
    row.appendChild(cell)
  }
})
