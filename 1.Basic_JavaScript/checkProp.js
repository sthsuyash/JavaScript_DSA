/*

QN:
Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. If not, return "Not Found".

ToDo:
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
checkObj({city: "Seattle"}, "city") should return the string Seattle.
checkObj({city: "Seattle"}, "district") should return the string Not Found.
checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
*/

function checkObj(obj, checkProp) {

    let ans = obj.hasOwnProperty(checkProp)
    if (ans == true) {
        return (obj[checkProp]);
    }
    else {
        return "Not Found";
    }
}

// test cases
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"))
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet"))
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"))
console.log(checkObj({ city: "Seattle" }, "city"))
console.log(checkObj({ city: "Seattle" }, "district"))
console.log(checkObj({ pet: "kitten", bed: "sleigh" }, "gift"))