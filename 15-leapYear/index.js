function leapYear(year){
  if (year % 4 == 0){
    if(!year % 100 == 0 || year % 400 == 0 ){
    }
    console.log('leap year', year)
  } else {
    console.log('it is not a leap year', year)
  }
}

leapYear(2014)
leapYear(2000)
leapYear(2010)
leapYear(2012)
leapYear(2024)
