const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(mas) {
    //throw new NotImplementedError('Not implemented');
    if (!Array.isArray(mas)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let arr = mas.slice();
    let result;
    let discardPrev = arr.indexOf('--discard-prev');
    let doublePrev = arr.indexOf('--double-prev');
    let discardNext= arr.indexOf('--discard-next');
 
          if (discardNext === doublePrev - 2) {
            arr.splice(discardNext, 2);
            arr.splice(doublePrev - 2, 1);
          } else if (discardNext === discardPrev - 2) {
            arr.splice(discardNext, 2);
            arr.splice(discardPrev - 2, 1);
          }
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i - 1] === undefined && arr[i] === '--discard-prev') {
                arr.splice(i, 1);
            } else if (arr[i - 1] === undefined && arr[i] === '--double-prev') {
                arr.splice(i, 1);
            } else if (arr[i + 1] === undefined && arr[i] === '--double-next') {
                arr.splice(i, 1);
            } else if (arr[i + 1] === undefined && arr[i] === '--discard-next') {
                arr.splice(i, 1);
            } else if (i !== arr.length - 1 && arr[i] === '--double-next') {
                arr[i] = arr[i + 1];
            } else if (i !== 0 && arr[i] === '--double-prev') {
                arr[i] = arr[i - 1];
            } else if (i !== 0 + 1 && arr[i] === '--discard-prev') {
                arr.splice(i - 1, 2);
            } else if (i !== arr.length - 1 && arr[i] === '--discard-next') {
                arr.splice(i, 2);
            }
        }
        result = arr;
        return result;
}

module.exports = {
    transform
};