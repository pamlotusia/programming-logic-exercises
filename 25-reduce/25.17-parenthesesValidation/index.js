function isValidExpression(expression) {
  const parentheses = expression.split('').reduce((stack, char) => {
    if (char === '(' || char === ')') {
      if (char === '(') {
        stack.push(char);
      } else {
        if (stack.length === 0) {
          return [];
        }
        stack.pop();
      }
    }
    return stack;
  }, []);

  return parentheses.length === 0;
}

const expression1 = '(2 + 3) * (5 - 1)';
const expression2 = '2 + (3 * 5 - 1)';
const expression3 = '2 + (3 * (5 - 1)';

console.log(isValidExpression(expression1));
console.log(isValidExpression(expression2));
console.log(isValidExpression(expression3));