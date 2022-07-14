// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Decends one at a time until reaching the minimum
// repeat until the string is the appropriate length
// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"


function ascendDescend(length, minimum, maximum) {
  let increase = '', descending = '', answer = '';
  for (let i = minimum; i <= maximum; i++) {
      increase += i;
  }
  for (let j = maximum - 1; j > minimum; j--) {
      descending += j;
  }
  for (let k = 0; k < length; k++) {
      answer += increase;
      answer += descending;
  }
  return answer.slice(0, length);
}