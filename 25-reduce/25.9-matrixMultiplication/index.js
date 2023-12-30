function multiplyMatrices(matrix1, matrix2) {
  // Verifica se as matrizes são multiplicáveis
  if (matrix1[0].length !== matrix2.length) {
    throw new Error('As matrizes não são multiplicáveis.');
  }

  return matrix1.map(row1 => {
    return row1.reduce((resultRow, element, colIndex) => {
      const product = matrix2.reduce((sum, row2) => sum + element * row2[colIndex], 0);
      return resultRow.concat(product);
    }, []);
  });
}

// Exemplo de matrizes
const matrixA = [
  [2, 3],
  [4, 5],
];

const matrixB = [
  [1, 2],
  [3, 4],
];

// Testar a função
const resultMatrix = multiplyMatrices(matrixA, matrixB);
console.log('Resultado da multiplicação das matrizes:', resultMatrix);
