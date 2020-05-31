var Customer = /** @class */ (function () {
    function Customer(fn, ln) {
        this._firstName = fn;
        this._lastName = ln;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (val) {
            this._firstName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (val) {
            this._lastName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
// set value by constructor
var myCustomer = new Customer("Harshal", "Bawale");
myCustomer.firstName = "Vaishnavi";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
