// declare a global variable
declare var myGlobal: number;

// declare a global function
declare function myGlobalFunc(msg: string): void;

// declare overloaded functions
declare function getStuff(n: number): number[];
declare function getStuff(s: string): string[];

// declare an interface to define a reusable type
interface Options {
   x: number;
   y: number;
   num: number;
   msg: string;
}
declare function SetOptions(opts: Options): void;

// declare a class
declare class Client {
   constructor(secret: string);

   msg: string;
   showMessage(): void;
}

// declare type with aliases
declare class MyGreeter {}
type GreetingLike = string | (() => string) | MyGreeter;

// declare a namespace to organize types
declare namespace MyLib {
   // variables
   let numMsgs: number;

   // functions
   function hi(msg: string): void;

   // interfaces
   interface Stuff {
      times: number;
      msg: string;
   }

   // nested namespaces
   namespace Options {
      let name: string;
      let id: string;
      let value: number;
   }
}

// other form of nested namespaces
declare namespace MyLib.Other {
   let count: number;
   interface Point {
      x: number;
      y: number;
   }
}
