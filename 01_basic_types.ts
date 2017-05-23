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
      console.log("var: " + i); // displays "3, 3, 3"
   }, 100);
}

// Using 'let' provides 'block scoping' of the variable
// which does not leak outside the containing function.
// This displays "1, 2, 3".
for (let i=0; i < 3; i++) {
   setTimeout(function() {
      console.log("let: " + i); // displays "1, 2, 3"
   }, 100);
}

/*
** Array Destructuring
*/

let input = [1, 2];
let [first, last] = input; // array destructuring

[first, last] = [last, first]; // swap

let [primary, ...rest] = [1, 2, 3, 4, 5, 6];
console.log("primary: " + primary);
console.log("reset: " + rest);

let [tip] = [1, 2, 3, 4];
console.log("tip: " + tip);

let [, second, , fourth] = [41, 42, 43, 44];
console.log("2nd: " + second + ", 4th: " + fourth);

/*
** Object Destructuring
*/

// grab object properties as variables of the same name
let obj = {
   a: "HI!",
   b: 42,
   c: true
};
let { a, b } = obj;
console.log("a: " + a + ", b: " + b);

// set as variables with a different name
let { a: foo, b: bar } = obj;
console.log("a: " + foo + ", b: " + bar);

// get remaining properties as a separate object
let obj2 = {
   x: "HI!",
   y: 42,
   z: true
}
let {x, ...others} = obj2;
console.log("x: " + x + ", others.y: " + others.y + ", others.z: " + others.z);
