/*
** Basic Interface
*/

interface Person {
   // required properties
   name: string;

   // optional properties
   age?: number;

   // functions
   hi(): void;
}

var p: Person = {
   name: "Mark",
   hi: () => { console.log("wuzzup") }
};

console.log(p.name);
p.hi();

/*
** Interface as a Function Type
*/

// define the function interface type
interface AggregateFunction {
   (value: number, delta: number, factor: number): number;
}

// create the typed function
var agg: AggregateFunction = function(value: number, delta: number, factor: number) {
   return value + (delta * factor);
}

// use the typed function
console.log(agg(42, 8, 2)); // 42 + (8 * 2) = 58
