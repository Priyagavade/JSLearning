

// Initializing numbers array
let numbers = [86, 41, 55, 85, 90, 24];

let even = [];
let odd=[];
numbers.forEach(element => {
    if( element%2 == 0 )
    even.push(element);
    if (element%2==1)
    odd.push(element)

});
 

console.log(`Even numbers in an array are: ${even} and ${odd}`);