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
