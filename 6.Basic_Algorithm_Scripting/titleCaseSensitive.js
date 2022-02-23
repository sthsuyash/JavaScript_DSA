/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    str = str.split(' '); // split the function at spaces and create a array
    // mapping the array and replacing all the alphabets with small letters
    str = str.map(each => {
        return each.toLowerCase(); // turning each element of array to lower casee
    });
    // again mapping to change each first letter to uppercase.
    str = str.map(each => {
        return each.replace(each.charAt(0), each.charAt(0).toUpperCase()) //replace first character with uppercase
    })
    return str.join(' '); // turn array back to string and return
}

console.log(titleCase("I'm a little tea pot"));