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
    //throw new NotImplementedError('Not implemented');
    let newMas = [];

    for (let i = 0; i < n.toString().length; i++) {
        let mas = n.toString().split('');
        mas.splice(i, 1);
        newMas.push(Number(mas.join('')));
    }

    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }

    return getMaxOfArray(newMas);
}

module.exports = {
    deleteDigit
};