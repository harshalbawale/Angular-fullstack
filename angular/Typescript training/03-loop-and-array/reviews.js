var reviews = [5, 2, 4, 5, 3];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total = total + reviews[i];
}
var average = total / reviews.length;
console.log("Average is " + average);
