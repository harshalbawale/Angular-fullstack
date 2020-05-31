class Customer{
    private _firstName: string;
    private _lastName: string;

    get firstName(): string{
        return this._firstName;
    }

    set  firstName(val: string){
        this._firstName = val;
    }

    get lastName(): string{
        return this._lastName
    }

    set lastName(val: string){
        this._lastName = val;
    }

    constructor(fn: string, ln: string){
        this._firstName = fn;
        this._lastName = ln;
    }


}

// set value by constructor
let myCustomer =new Customer("Harshal","Bawale");

myCustomer.firstName = "Vaishnavi";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

