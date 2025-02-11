const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // let catAmount = 0;
  // for (let i = 0; i < matrix.length; i += 1) {
  //   for (let j = 0; j < matrix[i].length; j += 1) {
  //     if (matrix[i][j] == '^^') {
  //       catAmount++;
  //     }
  //   }
  // }
  // return catAmount;

  return matrix.reduce((catAmount, row) => {
    row.forEach(cell => {
      if (cell === '^^') {
        catAmount++;
      }
    });
    return catAmount;
  }, 0);
}

module.exports = {
  countCats
};
