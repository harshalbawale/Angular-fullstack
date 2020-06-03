class Customer{

    constructor(private _firstName: string, private _lastName: string){
    }

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


}

// set value by constructor
let myCustomer =new Customer("Harshal","Bawale");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

