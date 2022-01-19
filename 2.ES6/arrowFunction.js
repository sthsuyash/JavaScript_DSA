let square = (item) => item * item;
console.log(square(4));

// if the arrow function has only one parameter, the small bracket can be ommitted.
// E.g:
square = item => item * item;
console.log(square(5));

// to pass more than one parameter, arguements must be inside small brackets.
const mul = (num1, num2) => num1 * num2;
console.log(mul(25, 5));

// default parameter example
const increment = (number, value = 1) => number + value;
console.log(increment(1)); //returns 2 because the value arg is set to be one by default if no parameter is passed
prompt("Hey? ");