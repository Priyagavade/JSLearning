

var str = "I am ui developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Total number of vowels are: ${count}`);

console.log("_____________________________________________________________________________________________");

 function cube(val)
  
 {
    var sum=0;
    for (let index = 1; index <=10 ; index++) {
      sum+=index*index*index;
      return sum;
    }
  
 }
console.log(`sum of cube is ${sum}`);