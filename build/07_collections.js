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
var Pet = (function () {
    function Pet(name) {
        this.name = name;
    }
    return Pet;
}());
var pets = [
    new Pet("Barley"),
    new Pet("Bailey")
];
console.log(pets);
//# sourceMappingURL=07_collections.js.map