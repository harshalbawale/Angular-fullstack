import { Shape } from "./Shape";

export class Circle extends Shape{

    constructor(theX: number, theY: number,
        private _radious: number){
        super(theX,theY);
    }

    public get radious(): number {
        return this._radious;
    }
    public set radious(value: number) {
        this._radious = value;
    }

    getInfo(): string{
        return super.getInfo() + `, radious=${this._radious}`;
    }

}