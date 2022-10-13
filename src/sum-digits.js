const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    //throw new NotImplementedError('Not implemented');

    let result;

    function getSum(n) {

        let sum = Number(String(n)[0]);

        for (let i = 1; i < String(n).length; i++) {
            // console.log(String(n)[i]);
            sum += Number(String(n)[i]);
        }

        if (sum >= 10) {
            getSum(sum);
        } else {
            result = sum;
        }

        return result;
    }

    return getSum(n);

}

module.exports = {
    getSumOfDigits
};