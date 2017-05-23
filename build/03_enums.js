/*
** Simple Enum
*/
// define an enum type, starts with value 0 by default
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// set an enum variable
var c = Color.Green;
// displayed as index value '1'
console.log(c);
/*
** Enum with Starting Value
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 42] = "Up";
    Direction[Direction["Down"] = 43] = "Down";
    Direction[Direction["Left"] = 44] = "Left";
    Direction[Direction["Right"] = 45] = "Right";
})(Direction || (Direction = {}));
var d = Direction.Left;
console.log(d); // displayed as value '44'
/*
** Get Enum Member Names
*/
var prop = Direction[Direction.Down];
console.log(prop);
/*
** Enum with Constant and Computed Members
*/
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed members
    FileAccess[FileAccess["MagicLen"] = "ABC123".length] = "MagicLen"; // 6
})(FileAccess || (FileAccess = {}));
var fwrite = FileAccess.Write;
var fmagicLen = FileAccess.MagicLen;
console.log(fwrite); // 4
console.log(fmagicLen); // 6
console.log(9 /* B */); // 9
//# sourceMappingURL=03_enums.js.map