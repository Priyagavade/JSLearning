
var square =function (value)
{
    return value*value;
}
console.log(`___________step 1__________`);
var result=square(5);
console.log(`squer of 5:-${result}`);
var result=square(6);
console.log(`squer of 6:-${result}`)
var result=square(25);
console.log(`squer of 25:-${result}`)
var result=square(100);
console.log(`squer of 100:-${result}`)
var result=square(67.89);
console.log(`squer of 67.89:-${result}`)
var result=square(59);
console.log(`squer of 59:-${result}`)

console.log(`___________step 2__________`);
console.log(`tupe of function:-`,  typeof square);

console.log(`___________step 3__________`);

var areaofRectangle= function(length,width)
{
    return length * width;

}
var result=areaofRectangle(499,917)
console.log(`area of rectangle:-`,result);


console.log(`___________step 4__________`);
var swapValues= function(value1,value2)
{
    console.log('Before swap ==>', value1, value2);
    var temp=value1;
    value1=value2;
    value2=temp;
 console.log(`After swap ==>`, value1, value2);

}
swapValues('mahi','Raina');
swapValues(55,57);

console.log(`___________step 5__________`);

var string=function()
{
    var str='JS themostpopular language of internate';

    console.log('1)-total character available in string:',str.length);

    console.log('2)-Char stored at index 6 is: ', str.charAt(6));

    console.log('3)-Char stored at index 11 is: ', str.charAt(11));

   // console.log('last character is : ', str.length-1);
    var lastIndexChar = str.charAt(str.length-1);
    console.log(`4)-Last character is : ${lastIndexChar}`);


    console.log('5)-first character is : ', str.charAt(0));

    var lastIndexChar = str.charAt(str.length-3);
    console.log(`6)-third Last character is : ${lastIndexChar}`);

    var words = str.split(" ");
   // console.log(words);
    console.log(`7)-Total words is:  ${words.length}`);
}
string();