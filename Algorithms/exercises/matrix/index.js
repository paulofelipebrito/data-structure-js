// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3], 
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matrix = []
  let top = 0;
  let down = n -1;
  let left = 0;
  let right = n -1;

  // 0 left to right
  // 1 top to down
  // 2 right to left
  // 3 down to top
  let direction = 0
  let number = 0
  let row = [];

  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      row.push(0)
    }
    matrix.push(row)
    row = []
  }

  while(top <= down && left<=right){
    number += 1
    if(number > n**2){
      break
    }
    if(direction === 0){
      matrix[top][left] = number
      if(matrix[top][left + 1] !== 0){
        direction = 1;
        top += 1;
      } else {
        left += 1;
      }
    } else if(direction === 1){
      matrix[top][left] = number
      if(top === down || matrix[top + 1][left] !== 0){
        direction = 2;
        left -= 1;
      } else {
        top += 1;
      }
    } else if(direction === 2){
      matrix[top][left] = number
      if(matrix[top][left - 1] !== 0){
        direction = 3;
        top -= 1
      } else {
        left -= 1
      }
    } else if(direction === 3){
      matrix[top][left] = number
      if(matrix[top - 1][left] !== 0){
        direction = 0;
        left += 1
      } else {
        top -= 1
      }
    }
  }

  return matrix;
}

const test = matrix(5)

module.exports = matrix;
