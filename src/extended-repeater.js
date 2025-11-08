const { NotImplementedError } = require('../lib');

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
  let arr = [];

  if (typeof str !== 'string') str = String(str);
  
  let addition = options.addition;
  if (addition !== undefined && typeof addition !== 'string') addition = String(addition);

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < repeatTimes; i++) {
    let additions = [];

    for (let j = 0; j < additionRepeatTimes; j++) {
      additions.push(addition);
    }

    let fullStr = str + additions.join(additionSeparator);
    arr.push(fullStr);
  }

  return arr.join(separator);
}

module.exports = {
  repeater
};
