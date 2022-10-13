const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    //throw new NotImplementedError('Not implemented');

    let mas = arr.slice();
    let indexs = [];
    let newMas = [];
    newMas.length = arr.length;

    mas.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === -1) {
            indexs.push(i);
        }

    }


    for (let j = 0; j < indexs.length; j++) {
        newMas[indexs[j]] = -1;
    }


    for (let k = indexs.length; k < mas.length; k++) {
        for (let g = 0; g < newMas.length; g++) {
            if (newMas[g] === undefined) {
                newMas[g] = mas[k];
                delete mas[k];
            }
        }
    }

    return newMas;

}

module.exports = {
    sortByHeight
};