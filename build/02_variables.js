/*
** 'var' vs 'let' variables
*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// Using 'var' has some issues. This displays "3, 3, 3",
// because the variable 'i' is using the same variable from
// the same scope. The scope of 'i' leaks out of the containing
// function.
for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log("var: " + i); // displays "3, 3, 3"
    }, 100);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log("let: " + i_1); // displays "1, 2, 3"
    }, 100);
};
// Using 'let' provides 'block scoping' of the variable
// which does not leak outside the containing function.
// This displays "1, 2, 3".
for (var i_1 = 0; i_1 < 3; i_1++) {
    _loop_1(i_1);
}
/*
** Array Destructuring
*/
var input = [1, 2];
var first = input[0], last = input[1]; // array destructuring
_a = [last, first], first = _a[0], last = _a[1]; // swap
var _b = [1, 2, 3, 4, 5, 6], primary = _b[0], rest = _b.slice(1);
console.log("primary: " + primary);
console.log("reset: " + rest);
var tip = [1, 2, 3, 4][0];
console.log("tip: " + tip);
var _c = [41, 42, 43, 44], second = _c[1], fourth = _c[3];
console.log("2nd: " + second + ", 4th: " + fourth);
/*
** Object Destructuring
*/
// grab object properties as variables of the same name
var obj = {
    a: "HI!",
    b: 42,
    c: true
};
var a = obj.a, b = obj.b;
console.log("a: " + a + ", b: " + b);
// set as variables with a different name
var foo = obj.a, bar = obj.b;
console.log("a: " + foo + ", b: " + bar);
// get remaining properties as a separate object
var obj2 = {
    x: "HI!",
    y: 42,
    z: true
};
var x = obj2.x, others = __rest(obj2, ["x"]);
console.log("x: " + x + ", others.y: " + others.y + ", others.z: " + others.z);
var indexedList = ["howdy", "hi"];
console.log("first index = " + indexedList[0] + ", second index = " + indexedList[1]);
var _a;
//# sourceMappingURL=02_variables.js.map