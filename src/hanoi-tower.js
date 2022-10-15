const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(diskNumber, turnsSpeed) {
  //throw new NotImplementedError('Not implemented');
  let obj = {
    turns: 0,
    seconds: 0,
}

let turns = 2 ** diskNumber - 1;
obj.turns =  turns;
seconds = Math.floor(1 / turnsSpeed * turns * 3600);
obj.seconds =  seconds;

return obj;
}

module.exports = {
  calculateHanoi
};
