import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(10,20);
let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(0,0,10,12);

let theShape: Shape[] = [];

theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRectangle);

for(let tempShape of theShape){
    console.log(tempShape.getInfo());
    
}