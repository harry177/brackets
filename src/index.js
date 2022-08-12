module.exports = function check(str, bracketsConfig) {
    let stack = [];
  let brackets = {
      ')':'(',
      '}':'{',
      ']':'[',
      '|':'|',
      '2':'1',
      '4':'3',
      '6':'5',
      '7':'7',
      '8':'8'
  }
  
  function isCLosedBrackets(elem) {
    return [')', '}', ']', '|', '2', '4', '6', '7', '8'].indexOf(elem) > -1;
  }
  
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (isCLosedBrackets(current)) {
      if (brackets[current] === stack[stack.length-1]) {
        stack.pop();
      } else {
        stack.push(current);
      }
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
  }