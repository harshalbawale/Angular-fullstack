let reviews: number[] = [5,2,4,5,3];
let total: number = 0;
for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
    total = total + reviews[i];
}

let average: number = total/reviews.length;

console.log("Average is "+ average);
