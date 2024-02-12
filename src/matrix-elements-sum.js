const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    return matrix.reduce((acc, row, i) => {
        row.forEach((el, j) => {
            let hasZeroBelow = matrix
                .slice(0, i)
                .some((nextRow) => nextRow[j] === 0);
            acc += hasZeroBelow ? 0 : el;
        });
        return acc;
    }, 0);
}

module.exports = {
    getMatrixElementsSum,
};
