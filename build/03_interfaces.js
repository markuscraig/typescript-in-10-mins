/*
** Basic Interface
*/
var p = {
    name: "Mark",
    hi: function () { console.log("wuzzup"); }
};
console.log(p.name);
p.hi();
// create the typed function
var agg = function (value, delta, factor) {
    return value + (delta * factor);
};
// use the typed function
console.log(agg(42, 8, 2)); // 42 + (8 * 2) = 58
//# sourceMappingURL=03_interfaces.js.map