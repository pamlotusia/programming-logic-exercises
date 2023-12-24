
const people = [
  { age: 21, name: 'pedro', bdate: new Date('25 march 2002')},  
  { age: 33, name: 'robert', bdate: new Date('6 september, 1990')},
  { age: 6, name: 'angel', bdate: new Date('23 july, 2017')},
  { age: 3, name: 'carla', bdate: new Date('7 march, 2020')},
  { age: 23, name: 'matheus', bdate: new Date('3 january, 2000')}
]

const date = new Date('25 march 2001')
console.log(date)

function filteringBirthdates(arr, date){
  return arr.filter((person)=> {
    if(person.bdate.getYear() > date.getYear()){
      return true
    }
  })
}

console.log(filteringBirthdates(people, date))