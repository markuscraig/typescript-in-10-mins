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
** 'var' vs 'let' variables
*/

// Using 'var' has some issues. This displays "3, 3, 3",
// because the variable 'i' is using the same variable from
// the same scope. The scope of 'i' leaks out of the containing
// function.
for (var i=0; i < 3; i++) {
   setTimeout(function() {
      console.log(i); // displays "3, 3, 3"
   }, 100);
}

// Using 'let' provides 'block scoping' of the variable
// which does not leak outside the containing function.
// This displays "1, 2, 3".
for (let i=0; i < 3; i++) {
   setTimeout(function() {
      console.log(i); // displays "1, 2, 3"
   }, 100);
}
