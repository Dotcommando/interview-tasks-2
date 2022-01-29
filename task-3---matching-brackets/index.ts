/**
 * Returns true if the brackets are paired correctly and false if they are not.
 */
const OPENING_BRACKETS = ['{', '[', '('];
const CLOSING_BRACKETS = ['}', ']', ')'];
const PAIR = {
  '{': '}',
  '[': ']',
  '(': ')',
};

function isValid(str: string): boolean {
  const length = str.length;
  let expects = [];
  let error = false;

  for (let i = 0; i < length; i++) {
    if (OPENING_BRACKETS.includes(str[i])) {
      expects.push(str[i]);
    } else if (CLOSING_BRACKETS.includes(str[i])) {
      if (!expects.length) {
        error = true;
        break;
      }

      if (str[i] === PAIR[expects[expects.length - 1]]) {
        expects.splice(expects.length - 1, 1);
      } else {
        error = true;
        break;
      }
    }
  }

  if (expects.length) {
    error = true;
  }

  console.log(str, !error);
  return !error;
}


isValid('(foo)'); // true
isValid('(f[o]{o})'); // true
isValid('[(){}()()]'); // true
isValid('(foo'); // false
isValid('{f[o}o]'); // false
