const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nums = String(n).split("");
  let maxNum = 0;

  for (let i = 0; i < nums.length; i++){
    const num = Number(nums.filter((item, index) => index !== i).join(""));

    if (num > maxNum){
      maxNum = num;
    }
  }

  return maxNum;
}

module.exports = {
  deleteDigit
};
