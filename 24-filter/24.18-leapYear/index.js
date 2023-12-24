const years = [2000, 1975, 1870, 1553, 1754, 2023, 2016]

function leapYear(arr){
  return arr.filter((year)=> {
    if((year % 4 === 0 ) && (year % 100!== 0) || (year % 400 === 0)){
      return true
    }
})
}

console.log(leapYear(years))