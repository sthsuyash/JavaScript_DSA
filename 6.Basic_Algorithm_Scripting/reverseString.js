/*
Reverse a String

You may need to turn the string into an array before you can reverse it.
Your result must be a string.

 */

function reverseString(str) {
    str = str.split('');
    str.reverse();
    str = str.join('');
    return str;
}

console.log(reverseString("smsd"));
