function gradeAverage(array) {
  let totalGrades = 0

  for (let i = 0; i < array.length; i++) {
    let sum = 0

    for (let j = 0; j < array[i].grades.length; j++) {
      sum += array[i].grades[j]
    }

    let average = sum / array[i].grades.length
    totalGrades += average
    console.log(`Average of ${array[i].name} is ${average}`)
  }

  let finalResult = totalGrades / array.length

  return finalResult
}

let arrayStudents= [
  (student1 = {
    name: 'joanne',
    grades: [5, 10, 5, 5, 10] // 7
  }),
  (student2 = { name: 'paul', grades: [8, 8, 8, 8, 8] })
] // 8
// total average from 2 students: 7.5

let test = gradeAverage(arrayStudents)
console.log(test)

