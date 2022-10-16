const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = []
  names.forEach((item, index) => {
    if (newArr.includes(item)) {
      for (let i = 1; newArr.length < index + 1; i++) {
        let newEl = item + `(${i})`
        if (!newArr.includes(newEl)) {
          newArr.push(newEl)
        }
        item
        
      }
    } else {
      newArr.push(item)
    }
    
  })
  return newArr
}

module.exports = {
  renameFiles
};
