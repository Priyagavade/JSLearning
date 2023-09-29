
function stringhan()
{
    console.log(`"1)-->hey you are doing good keep it up"`);
    

 var str = ("     hey you are doing good keep it up      ");

 console.log("__________________________________________________________________");
console.log('2)--->Total string length is:',str.length);

 console.log("__________________________________________________________________");
var lengthBeforeTrim=str.length;
console.log("3)--->Length before trim : ", str.length);

var result = str.trim();
console.log("Length after trim: ", result.length);
console.log("string is after trim:-",result);
console.log("__________________________________________________________________");

var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('4)---->Removed extra spaces are: ', result);
 console.log("__________________________________________________________________");


var result = str.charAt(0);
console.log("5)---->first character: ", result);

var lastIndexChar = str.charAt(str.length-1);
console.log('Last index char is: ', lastIndexChar);

console.log("__________________________________________________________________");

// //WAP to count the total number words

var words = str.split("  ");
console.log(words);
console.log('Total words is: ', words.length);

console.log("__________________________________________________________________");

console.log('7)--->Index of char good:',str.indexOf('good'));
console.log("__________________________________________________________________");

var result = str.slice(22);
console.log("8)--->substring starting form index 22:-",result);
console.log("__________________________________________________________________");

var result = str.includes('up');
console.log("9)---->Is up word available: ", result);
console.log("__________________________________________________________________");


var result = str.includes('hey');
console.log("10)----->Is hey word available: ", result);




}
stringhan()



