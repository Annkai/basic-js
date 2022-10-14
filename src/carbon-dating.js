const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(MODERN_ACTIVITY) {
    //throw new NotImplementedError('Not implemented');
    let result;
    const HALF_LIFE_PERIOD = 5730;
    const ISOTOP_IDENTIFY = 15;
    const K = 0.693 / HALF_LIFE_PERIOD;

    if (!Number(MODERN_ACTIVITY) || typeof MODERN_ACTIVITY !== 'string') {
        result = false;
    } else if (Number(MODERN_ACTIVITY) < 1 || Number(MODERN_ACTIVITY) > 15) {
        result = false;
    } else {
        result = Math.ceil(Math.log(ISOTOP_IDENTIFY / MODERN_ACTIVITY) / K);
    }
    return result;
}

module.exports = {
    dateSample
};