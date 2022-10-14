const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(springDate) {
  //throw new NotImplementedError('Not implemented');
  let result;

if (!arguments.length) {
 return 'Unable to determine the time of year!';
}
 

if (!(springDate instanceof Date) || springDate.hasOwnProperty('toString')) {
  throw new Error('Invalid date!');
}

let month = springDate.getMonth();
            console.log(month);
  
            if (month >= 0 && month < 2 || month === 11) {
                result = 'winter';
            } else if (month >= 2 && month < 5) {
                result = 'spring';
            } else if (month >= 5 && month < 8) {
                result = 'summer';
            } else if (month >= 8 && month < 11) {
                result = 'autumn';
            }
 
  return result;
}

module.exports = {
  getSeason
};
