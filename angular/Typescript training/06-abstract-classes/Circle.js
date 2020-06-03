"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(theX, theY, _radious) {
        var _this = _super.call(this, theX, theY) || this;
        _this._radious = _radious;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this._radious, 2);
    };
    Object.defineProperty(Circle.prototype, "radious", {
        get: function () {
            return this._radious;
        },
        set: function (value) {
            this._radious = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", radious=" + this._radious);
    };
    return Circle;
}(Shape_1.Shape));
exports.Circle = Circle;
