//It should be noted that the class keyword declares a new function, to which a constructor is added. 
// This constructor is invoked when new is called to create a new object.

class Vegetable {
    constructor(name) {
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

const carrot = new Vegetable('carrot'); //  creating a new object
console.log(carrot.name); // Should display 'carrot'