/*
** Basic Types
*/

// there are 3 basic types (boolean, number, string)
var isOK: boolean = true;
var answer: number = 42;
var user: string = "Mark";

console.log(isOK);
console.log(answer);
console.log(user);

// use 'any' when type is not known
var whatever: any = 42;
whatever = "something else";
whatever = false;

console.log(whatever);
/*
** Basic Types
*/

// there are 3 basic types (boolean, number, string)
var isOK: boolean = true;
var answer: number = 42;
var user: string = "Mark";

console.log(isOK);
console.log(answer);
console.log(user);

// use 'any' when type is not known
var whatever: any = 42;
whatever = "something else";
whatever = false;

console.log(whatever);

/*
** Tuples
*/

let tup: [number, string];
tup = [42, "hi!"];
console.log("tup0: " + tup[0] + ", tup1: " + tup[1]);
