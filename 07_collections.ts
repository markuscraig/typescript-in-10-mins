// array of numbers
var numList: number[] = [2, 4, 8, 16, 32];
console.log(numList);

// array of strings
var nameList: string[] = ["Mark", "Wendy", "Pankaj", "Prasanna"];
console.log(nameList);

// array of booleans
var okList: boolean[] = [true, false, true];
console.log(okList);

// generic array type
var genericList: Array<number> = [1, 2, 3];
console.log(genericList);

// array of 'any' type
var whateverList: any = [1, "HI!", 42, true];
console.log(whateverList);

// array of interfaces
interface User {
   first: string;
   last: string;
}
var users: User[] = [
   { first: "Mark", last: "Craig" },
   { first: "Joe", last: "Blow" },
]

// array of classes
class Pet {
   constructor(public name: string) {}
}
var pets: Pet[] = [
   new Pet("Barley"),
   new Pet("Bailey")
];
console.log(pets);
