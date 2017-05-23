/*
** Simple Enum
*/

// define an enum type, starts with value 0 by default
enum Color {
   Red,
   Green,
   Blue
}

// set an enum variable
var c: Color = Color.Green;

// displayed as index value '1'
console.log(c);

/*
** Enum with Starting Value
*/

enum Direction {
   Up = 42,
   Down,
   Left,
   Right
}

var d: Direction = Direction.Left;
console.log(d); // displayed as value '44'

/*
** Get Enum Member Names
*/
var prop: string = Direction[Direction.Down];
console.log(prop);

/*
** Enum with Constant and Computed Members
*/

enum FileAccess {
   // constant members
   None,                      // 0
   Read = 1 << 1,             // 2
   Write = 1 << 2,            // 4
   ReadWrite = Read | Write,  // 6

   // computed members
   MagicLen = "ABC123".length // 6
}

var fwrite: FileAccess = FileAccess.Write;
var fmagicLen: FileAccess = FileAccess.MagicLen;
console.log(fwrite); // 4
console.log(fmagicLen); // 6

/*
** Constant Enums are compiled as inline values (instead
** of javascript object with forward / reverse lookup tables).
** Constant Enums can only contain constant members.
*/

const enum Sections {
   A = 8,
   B,
   C
}

console.log(Sections.B); // 9
