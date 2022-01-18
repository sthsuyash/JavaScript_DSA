function stringToInteger(myString) {
    return parseInt(myString);
}

let a = stringToInteger("abc"); // returns Nan
console.log(a);
console.log(typeof a); // returns number because the string has been converted into number 
// but the value cannot be displayed as number so called Nan.
a = stringToInteger("56") // returns 56 as number
// console.log(typeof "56");
console.log(a);
console.log(typeof a);

/*
It takes a second argument for the radix,
 which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:
parseInt(string, radix);

*/
function convertToInteger(str) {
    return parseInt(str, 2); // specifies the number we passes is in binary form
}

console.log(convertToInteger("10011"));
