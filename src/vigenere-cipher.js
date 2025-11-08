const { NotImplementedError } = require('../lib');

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

  constructor(direct = true){
    this.direct = direct;
  }

  _process(message, key, encrypt = true){
    if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++){
      const char = message[i];
      if(char >= 'A' && char <= 'Z'){
        const m = char.charCodeAt(0) - 65;
        const k = key[keyIndex % key.length].charCodeAt(0) - 65;

        let c;

        if(encrypt){
          c = (m + k) % 26;
        } else {
          c = (m - k + 26) % 26;
        }

        result += String.fromCharCode(c + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');

  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
