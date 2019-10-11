module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (const brack of str) {
    let current = bracketsConfig.find(item => item[0] === brack || item[1] === brack);
    if (brack === current[0] && current[0] !== current[1]) {
      stack.push(brack);
    } else if (current[0] === current[1]) {
      stack[stack.length - 1] === current[0] ?  del = stack.pop() : stack.push(brack);
    } else if (brack === current[1]) {
      let del = stack.pop();
      let temp = bracketsConfig.find(item => item[0] === del);
      if (del === undefined || brack !== temp[1]) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
      return false;
  }
  return true;
}    
// const config1 = [['(', ')'], ['|', '|']];

// console.log(check('|(|)', config1))