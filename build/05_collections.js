// array of numbers
var numList = [2, 4, 8, 16, 32];
console.log(numList);
// array of strings
var nameList = ["Mark", "Wendy", "Pankaj", "Prasanna"];
console.log(nameList);
// array of booleans
var okList = [true, false, true];
console.log(okList);
// generic array type
var genericList = [1, 2, 3];
console.log(genericList);
// array of 'any' type
var whateverList = [1, "HI!", 42, true];
console.log(whateverList);
var users = [
    { first: "Mark", last: "Craig" },
    { first: "Joe", last: "Blow" },
];
// array of classes
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var pets = [
    new Animal("Barley"),
    new Animal("Bailey")
];
console.log(pets);
//# sourceMappingURL=05_collections.js.map