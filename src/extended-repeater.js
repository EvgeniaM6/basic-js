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
  if (options.addition || options.addition === false || options.addition === null) {
    let add = options.addition
    if (options.addition === false) {
      add = 'false'
    } else if (options.addition === null) {
      add = 'null'
    }

    if (options.additionRepeatTimes) {
      let arrAdd = []
      for (let repeatingAdd = 0; repeatingAdd < options.additionRepeatTimes; repeatingAdd++) {
        arrAdd.push(add.toString())
      }
      let separatorAdd = options.additionSeparator ? options.additionSeparator : '|'
      add = arrAdd.join(separatorAdd)
    }

    str += add
  }

  let arr = []
  if (options.repeatTimes) {
    for (let repeating = 0; repeating < options.repeatTimes; repeating++) {
      arr.push(str.toString())
    }
  } else {
    arr.push(str.toString())
  }

  let separator = options.separator ? options.separator : '+'
  let result = arr.join(separator)
  return result
}

module.exports = {
  repeater
};
