var n1 = "20";
var n2 = 20;
console.log(n1===n2); //Equality

var n1 = "20";
var n2 = 20;
console.log(n1==n2); //Equality with coercion

console.log(n1, typeof n1);
n1=+n1;
console.log(n1, typeof n1);


//NAN  syntax
var fullName = "Hello"; 
var myNumber = +fullName;
 console.log(myNumber, typeof myNumber);