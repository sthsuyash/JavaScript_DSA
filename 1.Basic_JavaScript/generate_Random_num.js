/*
    Math.random() -> generates random number from 0(inclusive) to 1 (exclusive)\
    i,e. 0 is generated while 1 is not.
    Math.floor() is used because random number is in floating points and we would need a integer 
    so floor removes the decimal points
*/

function random() {
    return Math.floor(Math.random() * 20);
}

for (let index = 0; index < 5; index++) {
    console.log(random());
}
console.log("\n");

// random in range myMin to myMax
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor((Math.random() * (myMax - myMin + 1) + myMin));
    // Only change code above this line
}
for (let i = 0; i < 5; i++) {
    console.log(randomRange(2, 10));
}