
console.log(`=================ques1=======================`);
const arraynumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`total length of array:--> ${arraynumber.length}`);

console.log(`=================ques2=======================`);

var firstItem = arraynumber[0];
var lastItem = arraynumber[arraynumber.length-1];
console.log(`first and last element in the array:-->${firstItem},${lastItem}`);

console.log(`=================ques3=======================`);
console.log(` last element in array is:  ${arraynumber[arraynumber.length-3]}`);

console.log(`=================ques4=======================`);
let even=[];
for (const index in arraynumber) {
    
   if (arraynumber[index]%2==0) {
   
    even.push(arraynumber[index]);
   }
  
}
console.log(`Even elements in given array: ${even}`);

console.log(`=================ques5=======================`);

let odd=[];
for (const index in arraynumber) {

    if (arraynumber[index]%2==1) {
            odd.push(arraynumber[index]);
    }
   
 }
 console.log(`Odd elements in given array:${odd}`);

console.log(`=================ques6=======================`);
console.log(`---------------------------------------------------------------------------------------------`);
console.log(`Even positioned elements:----->`);
for (const index in arraynumber) {
   
   if (index%2==0) {
   let evenElement=arraynumber[index];
console.log(evenElement);
   }
}
let sum=0;
for (let index = 0; index < arraynumber.length; index++) {
   if (index%2==0) {
 sum=sum+arraynumber[index];
}
}
console.log(`Sum of even positioned elements:${sum}`);
console.log(`=================ques7=======================`);

console.log(`odd positioned elements:------>`);
 for (const index in arraynumber) {
    
    if (index%2==1) {
    let evenElement=arraynumber[index];
 console.log(evenElement);
    }
 }
 
 let sum1=0;
for (let index = 0; index < arraynumber.length; index++) {
    if (index%2==1) {
  sum1=sum1+arraynumber[index];
}
}
console.log(`Sum odd positioned elements:${sum1}`);

console.log(`=================ques8=======================`);

let sum2=0;
for (let index = 0; index < arraynumber.length; index++) {
   sum2 =sum2+ arraynumber[index];
    
}
console.log(`Sum of all elements of a given array:${sum2}`);

console.log(`=================ques9=======================`);
for (let index = 0; index < arraynumber.length; index++) {
    if (arraynumber[index]%5==0) {
        let element=arraynumber[index];
        console.log(element);
    }
    
}

console.log(`=================ques10=======================`);
let presentElement=arraynumber.includes(115,0);
console.log(`is 115 is present in array or not?: ${presentElement}`);

console.log(`=================ques11=======================`);
console.log(`                                                          `);
console.log(`is 23 is present in array or not: ${arraynumber.includes(23,0)}`);


console.log(`=================ques12=======================`);
arraynumber.splice(3,0,55,66);
console.log(`Insert 55,66 before index 3: ${arraynumber}`);

console.log(`=================ques13=======================`);
arraynumber.splice(4,3);
console.log(`Delete the 3 elements from the index 4: ${arraynumber}`);