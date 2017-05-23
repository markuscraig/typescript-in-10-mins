/*
** Basic Types
*/
// there are 3 basic types (boolean, number, string)
var isOK = true;
var answer = 42;
var user = "Mark";
console.log(isOK);
console.log(answer);
console.log(user);
// use 'any' when type is not known
var whatever = 42;
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
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 100);
};
for (var i_1 = 0; i_1 < 3; i_1++) {
    _loop_1(i_1);
}
//# sourceMappingURL=01_basic_types.js.map