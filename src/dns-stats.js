const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  //throw new NotImplementedError('Not implemented');
  let obj = {};
  let mas = [];
  
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
  }
  
  for (let i = 0; i < domains.length; i++) {
  
    let el = '';
    for(let j = 0; j <domains[i].length; j++) {
        el += `.${domains[i][j]}`;
    mas.push(el);
    }
  }
  
  for (let i = 0; i < mas.length; i ++) {
    if(!(mas[i] in obj)) {
      obj[mas[i]] = 1;
    } else {
      obj[mas[i]] += 1;
    }
  }
  
  
  return obj;
}

module.exports = {
  getDNSStats
};
