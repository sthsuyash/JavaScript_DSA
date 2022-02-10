/*
    You can also extract the actual matches you found with the .match() method.

    Here's an example:

    "Hello, World!".match(/Hello/);
    let ourStr = "Regular expressions";
    let ourRegex = /expressions/;
    ourStr.match(ourRegex);

    Here the first match would return ["Hello"] and the second would return ["expressions"].

    Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
    'string'.match(/regex/);
    /regex/.test('string');

*/
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);

/*
Note:
You can have multiple flags on your regex like /searchitem/gi
*/

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
result = twinkleStar.match(starRegex); // Change this line
console.log(result);