const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    //throw new NotImplementedError('Not implemented');
    let newMatrix = [];

    console.log(matrix);

    //Проверка каждой строки внутри строки
    for (let j = 0; j < matrix.length; j++) {
        let mas = [];
        for (let i = 0; i < matrix[0].length; i++) {
            let count = 0;
            if (matrix[j][i - 1] === true) {
                count++;
            } else if (matrix[j][i + 1] === true) {
                count++;
            }
            mas.push(count);
        }
        newMatrix.push(mas);
    }


    //Проверка каждого столбца внутри столбца

    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            let count = 0;
            if (matrix[i - 1] && matrix[i - 1][j] === true) {
                count++;
            } else if (matrix[i + 1] && matrix[i + 1][j] === true) {
                count++;
            }
            newMatrix[i][j] += count;
        }
    }


    //Проверка каждой главной диагонали внутри диагонали

    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            let count = 0;
            if (matrix[i - 1] && matrix[i - 1][j - 1] === true) {
                count++;
            } else if (matrix[i + 1] && matrix[i + 1][j + 1] === true) {
                count++;
            }
            newMatrix[i][j] += count;
        }
    }


    //Проверка каждой дополнительной диагонали внутри диагонали

    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            let count = 0;
            if (matrix[i - 1] && matrix[i - 1][j + 1] === true) {
                count++;
            } else if (matrix[i + 1] && matrix[i + 1][j - 1] === true) {
                count++;
            }
            newMatrix[i][j] += count;
        }
    }

    return newMatrix;

}

module.exports = {
    minesweeper
};