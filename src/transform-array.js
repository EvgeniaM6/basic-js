const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element === '--discard-prev') {
        if (newArr.length && arr[i-2] !== '--discard-next') {
          newArr.pop()
        }
      } else if (element === '--double-prev') {
        if (arr[i-1] && (arr[i-2] !== '--discard-next')) {
          newArr.push(arr[i-1])
        }
      } else if (element === '--double-next') {
        if (arr[i+1]) {
          newArr.push(arr[i+1])
        }
      } else if (element === '--discard-next') {
        if (arr[i+1]) {
          i++
        }
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
}

module.exports = {
  transform
};
