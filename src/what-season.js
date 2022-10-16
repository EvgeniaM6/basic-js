const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result
  if (date) {
    try {
      Date.prototype.valueOf.call(date)
    } catch (error) {
      throw new Error('Invalid date!');
    }

    let newD = new Date();
    let check = newD - date;
    if ((typeof date === 'object') && isFinite(check)) {
      let monthdate = date.getMonth()
      if (monthdate < 2 || monthdate > 10) {
        result = 'winter'
      } else if (monthdate > 1 && monthdate < 5) {
        result = 'spring'
      } else if (monthdate > 4 && monthdate < 8) {
        result = 'summer'
      } else {
        result = 'autumn'
      }
      console.log('result=', result);
      return result
    } else {
      throw new Error('Invalid date!');
    }
  } else {
    result = 'Unable to determine the time of year!'
    console.log('result=', result);
    return result
  }
}

module.exports = {
  getSeason
};
