

console.log(`given array  [20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`                                                                          `);
const arraynum =  [20,11,40,25,37,49,9,90,60,2,19];
const arrafilter = arraynum.filter( (currentValue )=> {
    return currentValue > 50;
} );
console.log(`number are greatter than 50 => ${arrafilter}`);
console.log(`-----------------------------------------------------------------------------`);

const arraeven = arraynum.filter( (currentValue )=> {
    return currentValue%2==1;
} );
console.log(`number are odd  => ${arraeven}`);
console.log(`-----------------------------------------------------------------------------`);


const arraymul= arraynum.filter( (currentValue )=> {
    return currentValue%5==0;
} );
console.log(`number are multiple 5  => ${arraymul}`);
console.log(`-----------------------------------------------------------------------------`);


// const arraybet = arraynum.filter(arraynum => arraynum > 20,arraynum<=50); 
// console.log(`number betwwn 50 to 60 ${arraybet}`); 
