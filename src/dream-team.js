const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  // throw new NotImplementedError('Not implemented');
 
  let newMas = [];
  let newMas2 =[];
  let result = '';
  
  if (!Array.isArray(arr)) {
      result = false;
  } else {
      let mas = arr.slice();
  
      for (let i = 0; i < mas.length; i++) {
          if(typeof mas[i] === 'string') {
              let el = mas[i].trim();
              el = el.replace(' ', '');
              newMas.push(el.toUpperCase());
          } 
          }
          
          if(newMas.length === 0) {
              result = false;
          } else {
              newMas.sort();
              for (let i = 0; i < newMas.length; i++) {
                  newMas2.push(newMas[i][0]);
              }
              result = newMas2.join('');
          }
  }
  return result;

}

module.exports = {
  createDreamTeam
};
