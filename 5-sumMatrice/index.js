const matrice1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

const matrice2 = [
  [9,8,7],
  [6,5,4],
  [3,2,1]
]

function sumMatrices(matrice1, matrice2){
  const lines = matrice1.length
  const columns = matrice1[0].length

  //verify if the matrices have the same dimensions
  if(lines !== matrice2.length || columns !== matrice2[0].length){
    return "The matrices have different dimensions and can not be summed"
  }

  //start one matrice to store the result
  const result =[]
  for(let i = 0; i< lines; i++){
    result[i] = []
  }

  // to sum the matrices 
  for(let i = 0; i < lines; i++){
    for (let j = 0; j < columns; j++){
      result[i][j] = matrice1[i][j] + matrice2[i][j]
    }
  }

  return result
}

console.log(sumMatrices(matrice1, matrice2))