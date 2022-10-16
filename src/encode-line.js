const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let encodedArr = []

  arr.forEach((item, index) => {

    if (encodedArr.length > 0 && encodedArr[encodedArr.length - 1][encodedArr[encodedArr.length - 1].length - 1] === item) {

      if (encodedArr[encodedArr.length - 1].length > 1) {
        encodedArr[encodedArr.length - 1][0]++
      } else {
        encodedArr[encodedArr.length - 1].unshift(2)
      }

    } else {
      encodedArr.push([item])
    }
  })

  let result = encodedArr.flat().join('')
  return result
}

module.exports = {
  encodeLine
};
