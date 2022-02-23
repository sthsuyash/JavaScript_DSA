/*
Falsy Bouncer
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
    let arrBoolean = arr.filter(each => {
        if (Boolean(each) === true) return each;
    })
    return arrBoolean;
}

console.log(bouncer([7, "ate", "", false, 9, true, 0, null]));