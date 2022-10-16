const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  mas: [],

  getLength() {
    //throw new NotImplementedError('Not implemented');
    return chainMaker.mas.length;
  },

  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    chainMaker.mas.push(value);
    return chainMaker;
  },

  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    if(!Number.isInteger(position) || position < 1 || position > chainMaker.mas.length){
      chainMaker.mas = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      chainMaker.mas.splice(position - 1, 1);
    }
    return chainMaker;
  },
  
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    chainMaker.mas.reverse();
    return chainMaker;
  },

  finishChain() {
 //throw new NotImplementedError('Not implemented');
 let result = [];
 for (let i = 0; i < chainMaker.mas.length; i++) {
 result.push(`( ${chainMaker.mas[i]} )`)
 }
 chainMaker.mas = [];
 return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
