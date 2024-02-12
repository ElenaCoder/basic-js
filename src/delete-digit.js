const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const numStr = n.toString();
    const variations = [];

    for (let i = 0; i < numStr.length; i++) {
        const newNumStr = numStr.slice(0, i) + numStr.slice(i + 1);
        variations.push(Number(newNumStr));
    }
    return Math.max(...variations);
}

module.exports = {
    deleteDigit,
};
