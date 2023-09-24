

console.log("====== Function type:function with no arguments and no return type ===== ");
console.log("1)");
function BTS(){
    console.log("Leader: RM");
    console.log('Members: seven');
    console.log('country: southKorea');
    console.log('band: k-pop');
}
BTS();

console.log("                                                ");

console.log("2)");
function blackPink() {
    console.log("leader:lisa");
    console.log("members:four");
    console.log("country:southKorea");
    console.log("band:K-pop");
    
}
blackPink();

console.log("_____________________________________________________________________________ ");
console.log("====== ques2 ===== ");
function myPersonalDetails(){
    console.log("Name: priya gavade");
    console.log('city: raigad');
    console.log('PIN CODE: 402112');
    console.log('College Name: VPKBIET');
 
}
myPersonalDetails();

console.log("_________________________________________________________________________________");
console.log(" ______ques 3________________");
console.log(" step 1) function with args no return_____________________");

console.log("==== swap ========");
function swapValues(valueOne, valueTwo) { // function declaration
    console.log('Before swap ==>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After swap ==>', valueOne, valueTwo);
}
swapValues(1000,2000);
console.log("                                       ");
swapValues("Virat","Anushka");
console.log("                                       ");

console.log("_______________Ques4)  Addition__________________");
console.log("                                       ");
function addThreeValues(num1,num2,num3) {
   
    var sum = num1+num2+num3
return sum;
}
var AddNum = addThreeValues(10.23,600,40);
var AddNum1 = addThreeValues("Hello"," Good"," Morning");
console.log("Addition ", AddNum );
console.log( "Addition  ",AddNum1);
console.log();