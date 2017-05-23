/*
** Basic Class Inheritance
*/

class Animal {
   // constructor with public name type
   constructor(public name: string){}

   // function to 'HOLLA!'
   holla(): void {}
}

class Dog extends Animal {
   constructor(name: string) {
      super(name);
   }

   // overrides function
   holla() {
      console.log("WOOF!");
   }
}

class Snake extends Animal {
   constructor(name: string) {
      super(name);
   }

   // overrides function
   holla() {
      console.log("HISSSSS");
   }
}

var animal1: Animal = new Dog("Barley");
animal1.holla();

var animal2: Animal = new Snake("Snape");
animal2.holla();
