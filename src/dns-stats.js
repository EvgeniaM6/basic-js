const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  domains.forEach(domain => {
    let arr = domain.split('.').reverse()
    arr.reduce((prev, item) => {
      prev = prev + '.' + item
      if (obj[prev]) {
        obj[prev]++
      } else {
        obj[prev] = 1
      }
      return prev
    }, '')
  })

  return obj
}

module.exports = {
  getDNSStats
};
