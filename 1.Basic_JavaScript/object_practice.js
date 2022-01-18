/* Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
You can set these object properties to whatever values you want, 
as long as name is a string, legs and tails are numbers, and friends is an array.
*/

/*
myDog should contain the property name and it should be a string.
myDog should contain the property legs and it should be a number.
myDog should contain the property tails and it should be a number.
myDog should contain the property friends and it should be an array.
myDog should only contain all the given properties.
*/

const myDog = {
    "name": "Sam",
    "legs": 4,
    "tails": 1,
    "friends": ["Happy", "Food"]
};
console.log(myDog); // prints the whole object
const name_of_dog = myDog.name;
console.log(name_of_dog);