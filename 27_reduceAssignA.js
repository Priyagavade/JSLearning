
console.log(` array_numbers =  [20, 11,40,25,37,49,9,90,60,2,19];`);

const array_numbers =  [20, 11,40,25,37,49,9,90,60,2,19];
console.log(`       step a.1)   ==>                                                                 `);
const sum = array_numbers.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(`find the sum using reduce() : ${sum}`);


console.log(`       step a.2)   ==>                                                                 `);

let sum1=0;
for (let index = 0; index < array_numbers.length; index++) {

    sum1+=array_numbers[index];

    
}
console.log(`find sum of element using traditional way ${sum1}`);
console.log(`==============================================================================================`);


const array_numbers1 = array_numbers.filter( (currentValue )=> {
    return currentValue %5==0;
} );
        //console.log(array_numbers1);
        console.log(`=========================find the number of multiple of 5 and then sum it===============`);

const sumoffive = array_numbers1.reduce( (runningTotal, value)=>{
    return runningTotal + value;
}, 0);
console.log(`find the sum using reduce() : ${sumoffive}`);