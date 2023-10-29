const fs = require('fs');
var max = 10175700;
const step = function (input) {
  if (input % 2 === 0) {
    return input / 2;
  } else {
    return input * 3 + 1;
  }
}

const collatz = function (output, memo) {
  let stepsSpend = 0;
  let history = [output];
  while (output != 1) {
    if (memo[output]) {
      stepsSpend += memo[output];
      break; // Skip the remaining steps
    } else {
      stepsSpend += 1;
      output = step(output);
      history.push(output);
    }
  }
  // Memoize the sequence
  for (let i = 0; i < history.length; i++) {
    memo[history[i]] = stepsSpend - i;
  }
  return stepsSpend;
}

var largestSteps = 0;
var x = 1;
var markedX = 0;
var memo = {}; // Memoization data structure
while (x < max) {
  let stepsSpend = collatz(x, memo);
  if (stepsSpend > largestSteps) {
    largestSteps = stepsSpend;
    markedX = x;
  }
  x += 1;
}
console.log(`BIGGEST STEPS WAS: ${largestSteps} AT X OF ${markedX}`);