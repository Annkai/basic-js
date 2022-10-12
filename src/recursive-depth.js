const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */



class DepthCalculator {
  calculateDepth(mas) {
    //throw new NotImplementedError('Not implemented');
    let self = this;

  return typeof(mas) === 'object' ? 1 + Math.max(0, ...mas.map(i => self.calculateDepth(i))) : false;

  }
}

module.exports = {
  DepthCalculator
};
