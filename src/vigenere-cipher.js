const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

    constructor(value = true) {
        this.value = value;
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.keywordKeys = [];
        this.stringKeys = [];
        this.newKeys = [];
        this.arr = [];
    }

    code(string, keyword) {
        this.keywordKeys = [];
        this.stringKeys = [];
        this.newKeys = [];
        this.arr = [];

        if (!string || !keyword) {
            throw new Error('Incorrect arguments!');
        } else {
            keyword = keyword.toUpperCase();
            string = string.toUpperCase();

            for (let n = 0; n < string.length; n++) {
                if (this.alphabet.indexOf(string[n]) === -1) {
                    this.arr.push(n);
                } else {
                    this.stringKeys.push(this.alphabet.indexOf(string[n]));
                }
            }

            while (this.keywordKeys.length < this.stringKeys.length) {
                for (let i = 0; i < keyword.length; i++) {
                    this.keywordKeys.push(this.alphabet.indexOf(keyword[i]));
                }
            }

            for (let v = 0; v < this.stringKeys.length; v++) {
                this.newKeys.push(this.alphabet[(this.keywordKeys[v] + this.stringKeys[v]) % this.alphabet.length]);
            }

            //insert the cut elements back
            for (let i = 0; i < this.arr.length; i++) {
                this.newKeys.splice(this.arr[i], 0, string[this.arr[i]]);
            }
            return this.value ? this.newKeys.join('') : this.newKeys.reverse().join('');
        }
    }

    decode(string, keyword) {
        this.keywordKeys = [];
        this.stringKeys = [];
        this.newKeys = [];
        this.arr = [];

        if (!string || !keyword) {
            throw new Error('Incorrect arguments!');
        } else {
            keyword = keyword.toUpperCase();
            string = string.toUpperCase();

            for (let n = 0; n < string.length; n++) {
                if (this.alphabet.indexOf(string[n]) === -1) {
                    this.arr.push(n);
                } else {
                    this.stringKeys.push(this.alphabet.indexOf(string[n]));
                }
            }

            while (this.keywordKeys.length < this.stringKeys.length) {
                for (let i = 0; i < keyword.length; i++) {
                    this.keywordKeys.push(this.alphabet.indexOf(keyword[i]));
                }
            }

            for (let v = 0; v < this.stringKeys.length; v++) {
                if (this.stringKeys[v] - this.keywordKeys[v] < 0) {
                    this.newKeys.push(this.alphabet[(this.stringKeys[v] - this.keywordKeys[v] + this.alphabet.length) % this.alphabet.length]);
                } else {
                    this.newKeys.push(this.alphabet[this.stringKeys[v] - this.keywordKeys[v]]);
                }
            }

            //insert the cut elements back
            for (let i = 0; i < this.arr.length; i++) {
                this.newKeys.splice(this.arr[i], 0, string[this.arr[i]]);
            }
            return this.value ? this.newKeys.join('') : this.newKeys.reverse().join('');
        }
    }

    encrypt(string, keyword) {
        //throw new NotImplementedError('Not implemented');
        return this.code(string, keyword);
    }

    decrypt(string, keyword) {
        //throw new NotImplementedError('Not implemented');
        return this.decode(string, keyword);
    }
}

module.exports = {
    VigenereCipheringMachine
};