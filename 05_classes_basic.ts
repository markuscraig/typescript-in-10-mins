/*
** Basic Class
*/

class Greeter {
   // properties
   name: string;

   // constructor
   constructor(name: string) {
      this.name = name;
   }

   // functions
   greet() {
      return "Howdy " + this.name;
   }
}

var g: Greeter = new Greeter("Mark");
console.log(g.greet());

/*
** Class with Generated Properties
*/

class Greeter2 {
   // constructor automatically generates public parameters as members
   constructor(public first: string, public last: string) {
   }

   greet() {
      return "Howdy " + this.first + " " + this.last;
   }
}

var g2: Greeter2 = new Greeter2("Mark", "Craig");
console.log(g2.greet());

/*
** Class with Default Constructor Properties
*/

class Point {
   // constructor uses default values for optional properties
   constructor(public x: number = 0, public y: number = 0){}

   dump() {
      console.log("POINT: x = " + this.x + ", y = " + this.y);
   }
}

new Point().dump();         // x = 0, y = 0
new Point(42).dump();       // x = 42, y = 0
new Point(1.1, 2.2).dump(); // x = 1.1, y = 2.2
