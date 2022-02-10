/*
     /string/ helps to check regexes in the string in js
     use .test() method
     it is case sensitive
*/

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // returns true 
console.log(result);

/*
    You can search for multiple patterns using the alternation or OR operator: |.
    E.g:
*/
let petString = "James has a pet cat.";
let petRegex = /John has a pet dog.|Emma has a pet bird.|Liz has a pet cat.|Alice has a pet fish./; // all these returns true
// and anything else will return false.
result = petRegex.test(petString);
console.log(result);

/*
Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. 
Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. 
There are other flags but here you'll focus on the flag that ignores case - the i flag. 
You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. 
This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
E.g;
*/
myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // the i after slash tells it to ignore cases
result = fccRegex.test(myString);
console.log(result); // although they are case different, they are matched as same