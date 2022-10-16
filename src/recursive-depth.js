const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  acc = 1;
  deep = 1;

  calculateDepth(arr) {
    if (arr.length) {
      arr.forEach((item, index) => {
        if (Array.isArray(item)) {
          this.deep++
          if (this.acc < this.deep) {
            this.acc++
          }
          this.calculateDepth(item)
        }
      })
      
    }
    this.deep--
    if (!this.deep) {
      this.deep = 1;
      let result = this.acc
      this.acc = 1
      return result
    }
    return this.acc
  }
}

module.exports = {
  DepthCalculator
};
