console.log(`====  1. Arithmetic Operator ====`);
// + - *
var num1 = 10;
var num2 = 2;
var result = num1 * num2;
console.log(`Multiplication result is: ${result}`);

var result = num1 ** 3;
console.log(`Exponential result is: ${result}`);

var result = num1 / num2;
console.log(`Division result is: ${result}`);

var result = num1%num2;
console.log(`Modulus result is: ${result}`);

console.log(`Modulus result is: ${10 % 3}`);

console.log(`Modulus result is: ${15 % 4}`);

console.log("date 27 sep lecture:- innerary operator");

var num1= 10;
var result=num1++; //assign first increment after
//var result=num1 +1;
var result=++num1; //increment first and assign next
console.log(`result is:-${result}`);

var num1= 10;
//var result=num1--; //assign first increment after
//var result=num1 +1;
var result=--num1; //increment first and assign next
console.log(`result is:-${result}`);

console.log("assignment operator");

var num3=5;
var num4=num3;
//compund addition +=
//num3=num3+3;
num3+=3 //is same as above
console.log(`addition is:${num3}`);
