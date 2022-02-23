// Define a Constructor Function
// Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

// Here is an example of a constructor:

// function Bird() {
//   this.name = "Albert";
//   this.color = "blue";
//   this.numLegs = 2;
// }

// creating new constructor 
function Bird(name, color, numLegs) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
}

let cardinal = new Bird("Cardinal", "White", 2); // creating object of Bird
console.log(cardinal);

function Dog(name, color, numLegs) {
    this.name = name
    this.color = color
    this.numLegs = 4
}

let terrier = new Dog("terrier", "black");
console.log(terrier);

