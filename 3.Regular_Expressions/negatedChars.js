/*
    To create a negated character set, you place a caret character (^) 
    after the opening bracket and before the characters you do not want to match.

    For example, /[^aeiou]/gi matches all characters that are not a vowel. 
    Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.
*/
// Create a single regex that matches all characters that are not a number or a vowel. 
// Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);
for (let i = 0; i < result.length; i++) {
    if (result[i] == ' ') {
        result[i] = "";
    }
}
result = result.join('');
console.log(result);