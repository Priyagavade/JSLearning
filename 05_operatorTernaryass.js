
console.log('***********male marriage eligibility**********');
console.log("                                  ");
function malemarriageelegibility(gender,age,boyname) {

    var result=gender=='male'  && age>=21
    ? `hey ${boyname} you are eligible for marriage `
    : `sorry ${boyname} you are not eligible for marriage`;
    return result;
    
}
var result1=malemarriageelegibility("male",25,"Billgate")
console.log(result1);
var result=malemarriageelegibility("male",17,"stew jobs")

console.log(result);

console.log("                                  ");
console.log('*******female marriage eligibility*******');
console.log("                                  ");
function malemarriageelegibility(gender,age,girlname) {

    var result=gender=='female'  && age>=18
    ? `hey ${girlname} you are eligible for marriage `
    : `sorry ${girlname} you are not eligible for marriage`;
    return result;
    
}
var result1=malemarriageelegibility("female",16,"Jenifer")
console.log(result1);
var result=malemarriageelegibility("female",27,"malinda gates")

console.log(result);