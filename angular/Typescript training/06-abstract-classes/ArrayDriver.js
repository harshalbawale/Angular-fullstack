"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 10, 12);
var theShape = [];
theShape.push(myCircle);
theShape.push(myRectangle);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShape = theShape_1[_i];
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}
