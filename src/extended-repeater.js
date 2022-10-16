const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let result = '';
  let additionsMas = [];
  let stringsMas = [];
  
  result += String(str);
  
  if ('addition' in options) {
    if ('additionRepeatTimes' in options) {
      for (let i = 0; i < options.additionRepeatTimes; i++) {
        additionsMas.push(String(options.addition));
      }
    
    } else {
      result += String(options.addition);
    }
  }
  
  if ('additionSeparator' in options) {
    result += additionsMas.join(options.additionSeparator);
  } else {
    result += additionsMas.join('|');
  }
  
  if ('repeatTimes' in options) {
    for (let i = 0; i < options.repeatTimes; i++) {
      stringsMas.push(result);
    }
  }
  
  if ('separator' in options && 'repeatTimes' in options) {
    result = stringsMas.join(options.separator);
  } else if (!('separator' in options) && 'repeatTimes' in options) {
    result = stringsMas.join('+');
  }
  
  return result;
}

module.exports = {
  repeater
};
