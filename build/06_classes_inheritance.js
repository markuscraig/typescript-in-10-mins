/*
** Basic Class Inheritance
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    // constructor with public name type
    function Animal(name) {
        this.name = name;
    }
    // function to 'HOLLA!'
    Animal.prototype.holla = function () { };
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // overrides function
    Dog.prototype.holla = function () {
        console.log("WOOF!");
    };
    return Dog;
}(Animal));
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    // overrides function
    Snake.prototype.holla = function () {
        console.log("HISSSSS");
    };
    return Snake;
}(Animal));
var animal1 = new Dog("Barley");
animal1.holla();
var animal2 = new Snake("Snape");
animal2.holla();
//# sourceMappingURL=06_classes_inheritance.js.map