const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    //throw new NotImplementedError('Not implemented');
    let count = 0;

    mas1 = s1.split('');
    mas2 = s2.split('');

    for (let i = 0; i < mas1.length; i++) {
        if (mas2.includes(mas1[i])) {
            count++;
            mas2.splice(mas2.indexOf(mas1[i]), 1);
        }
    }

    return count;
}

module.exports = {
    getCommonCharacterCount
};