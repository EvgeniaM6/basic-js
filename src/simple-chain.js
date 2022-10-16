const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (value) {
      this.arr.push(value.toString())
      return this
    } else if (value === 0) {
      this.arr.push('0')
      return this
      
    } else if (value === null) {
      this.arr.push('null')
      return this
      
    } else if (value === false) {
      this.arr.push(`false`)
      return this
      
    } else if (isNaN(value)) {
      this.arr.push(`NaN`)
      return this
      
    } else {
      
      this.arr.push(``)
      return this
    }
  },
  removeLink(position) {
    if (position && this.arr[position - 1]) {
      this.arr.splice(position - 1, 1)
      return this
    } else {
      this.arr = []
      throw new Error("You can\'t remove incorrect link!")
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    const chain = this.arr.slice().map(item => {return item === '' ? `( )` : `( ${item} )`}).join('~~')
    this.arr = []
    return chain
  }
};

module.exports = {
  chainMaker
};
