
console.log(`=======================map method assignment=======================`);
console.log(`given array  [20,11,40,25,23,11,9,31,60,2,19]`);
console.log(`                                                                          `);
const arraynum =  [20,11,40,25,23,11,9,31,60,2,19];
const newArray = arraynum.map( (currentValue )=> {
     return currentValue + 10;
});
console.log(`add 10 into each element =>  ${newArray}`);

console.log(`---------------------------------------------------------------------------------------------`);

const newArray1 = arraynum.map( (currentValue )=> {
    return currentValue *currentValue*currentValue;
});
console.log(`cube the each array element =>  ${newArray1}`);

console.log(`---------------------------------------------------------------------------------------------`);

const newArray2 = arraynum.map( (currentValue,index )=> {
    return currentValue + index;
});
console.log(`add the index value in each array element =>  ${newArray2}`);