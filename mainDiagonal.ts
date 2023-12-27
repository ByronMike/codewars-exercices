// Given a list of rows of a square matrix, find the product of the main diagonal.

// Examples:

//   [[1, 0], [0, 1]] should return 1
//   [[1, 2, 3], [4, 5, 6], [7, 8, 9]] should return 45

export function mainDiagonalProduct(mat: number[][]): number {
  let elementsOfDiag: number[] = [];
  for (let i = 0; i < mat.length; i++) {
    elementsOfDiag.push(mat[i][i]);
  }
  return elementsOfDiag.reduce((prev, current) => prev * current, 1);
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(mainDiagonalProduct(matrix));
