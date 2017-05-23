/*
** Basic Class
*/
var Greeter = (function () {
    // constructor
    function Greeter(name) {
        this.name = name;
    }
    // functions
    Greeter.prototype.greet = function () {
        return "Howdy " + this.name;
    };
    return Greeter;
}());
var g = new Greeter("Mark");
console.log(g.greet());
/*
** Class with Generated Properties
*/
var Greeter2 = (function () {
    // constructor automatically generates public parameters as members
    function Greeter2(first, last) {
        this.first = first;
        this.last = last;
    }
    Greeter2.prototype.greet = function () {
        return "Howdy " + this.first + " " + this.last;
    };
    return Greeter2;
}());
var g2 = new Greeter2("Mark", "Craig");
console.log(g2.greet());
/*
** Class with Default Constructor Properties
*/
var Point = (function () {
    // constructor uses default values for optional properties
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.dump = function () {
        console.log("POINT: x = " + this.x + ", y = " + this.y);
    };
    return Point;
}());
new Point().dump(); // x = 0, y = 0
new Point(42).dump(); // x = 42, y = 0
new Point(1.1, 2.2).dump(); // x = 1.1, y = 2.2
//# sourceMappingURL=05_classes_basic.js.map