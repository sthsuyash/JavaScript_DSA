/*
    You can search for a literal pattern with some flexibility with character classes. 
    Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

    For example, you want to match bag, big, and bug but not bog. 
    You can create the regex /b[aiu]g/ to do this. 
    The [aiu] is the character class that will only match the characters a, i, or u.
*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
console.log(bigStr.match(bgRegex));
console.log(bagStr.match(bgRegex));
console.log(bugStr.match(bgRegex));
console.log(bogStr.match(bgRegex));

// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
result = quoteSample.match(vowelRegex);
console.log(result);

/*
    Inside a character set, you can define a range of characters to match using a hyphen character: -.

    For example, to match lowercase letters a through e you would use [a-e].
*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
bgRegex = /[a-e]at/;
console.log(catStr.match(bgRegex));
console.log(batStr.match(bgRegex));
console.log(matStr.match(bgRegex));
// In order, the three match calls would return the values["cat"], ["bat"], and null.

quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);

quoteSample = "Blueberry 3.141592653s are delicious.";
myRegex = /[h-s2-6]/gi;
result = quoteSample.match(myRegex);
console.log(result);