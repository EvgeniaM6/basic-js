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
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  constructor(isDirect = true) {
    this.isDirect = isDirect
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    let encrMessage = ''
    const arrMessage = message.toUpperCase().split('')
    const arrKey = key.toUpperCase().split('')
    let arrKeyLonger = []

    let k = 0
    for (let i = 0; i < arrMessage.length; i++) {
      if (arrMessage[i] >= 'A' && arrMessage[i] <= 'Z') {
        if (k === arrKey.length) {
          k = 0
        }
        arrKeyLonger.push(arrKey[k])
        k++
      } else {
        arrKeyLonger.push(arrMessage[i])
      }
      
    }

    let encryptMessage = ''
    arrMessage.forEach((item, index) => {
      let encrLetter = ''
      if (item >= 'A' && item <= 'Z') {
        let indexLetterMessage = this.alphabet.indexOf(item)
        let indexLetterKey = this.alphabet.indexOf(arrKeyLonger[index])
        encrLetter = this.alphabet[(indexLetterMessage + indexLetterKey) % this.alphabet.length]
      } else {
        encrLetter = item
      }
      encryptMessage += encrLetter

    })

    let result
    if (this.isDirect) {
      result = encryptMessage
    } else {
      result = encryptMessage.split('').reverse().join('')
    }
    return result
  }
  
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }
    let decrMessage = ''
    const arrCipher = encryptedMessage.toUpperCase().split('')
    const arrKey = key.toUpperCase().split('')
    let arrKeyLonger = []

    let k = 0
    for (let i = 0; i < arrCipher.length; i++) {
      if (arrCipher[i] >= 'A' && arrCipher[i] <= 'Z') {
        if (k === arrKey.length) {
          k = 0
        }
        arrKeyLonger.push(arrKey[k])
        k++
      } else {
        arrKeyLonger.push(arrCipher[i])
      }
      
    }

    let decryptMessage = ''
    arrCipher.forEach((item, index) => {
      let decrLetter = ''
      if (item >= 'A' && item <= 'Z') {
        let indexLetterCipher = this.alphabet.indexOf(item)
        let indexLetterKey = this.alphabet.indexOf(arrKeyLonger[index])
        decrLetter = this.alphabet[(indexLetterCipher - indexLetterKey + this.alphabet.length) % this.alphabet.length]
      } else {
        decrLetter = item
      }
      decryptMessage += decrLetter

    })
    let result
    if (this.isDirect) {
      result = decryptMessage
    } else {
      result = decryptMessage.split('').reverse().join('')
    }
    return result
  }
}

module.exports = {
  VigenereCipheringMachine
};
