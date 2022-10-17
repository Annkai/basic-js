const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    //throw new NotImplementedError('Not implemented');
    let result = '';

    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        if (str[i - 1] !== str[i] && str[i] === str[i + 1]) {
            let count = 0;
            let nextIndex = i;
            do {
                console.log('да');
                nextIndex++;
                count++;
            } while (str[i] === str[nextIndex]);
            result += `${count}${str[i]}`;
        } else if (str[i - 1] !== str[i] && str[i] !== str[i + 1]) {
            result += str[i];
        }
    }

    return result;
}

module.exports = {
    encodeLine
};