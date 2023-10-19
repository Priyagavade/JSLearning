
let name=()=>{
    console.log(`==============================================que 1==============================`);
    console.log(`Good Morning today is wednesday`);
}
name();

let multiplication = (num1,num2,num3) => {
    console.log(`==============================================que 2==============================`);
 console.log(`multiplication is 5,2,5: ${num1*num2*num3}`);
}
multiplication(5,2,5)

let multiplication1 = (num1,num2,num3=1) => {
    console.log(`==============================================que 3==============================`);
 console.log(` multplication number are 10,4 : ${num1*num2*num3}`);
}
multiplication1(10,4)

let addition = (num1,num2,num3,num4,num5)=>{
    let result1 =num1+num2+num3+num4+num5;
    return result1;
    
}
let result1 = addition(100,100,200,349,756,);
 
console.log(`=================================ques 4=================================================`);

console.log(`addition : ${result1}`);

let addition1 = (num1,num2,num3,num4,num5)=>{
   
   let result=String.concat(num1,num2.num3,num4,num5)
    return result;
    
}
let result = addition("i am ","learning ", "e6 ","feature ","in depteh ");

console.log(`addition : ${result}`);


