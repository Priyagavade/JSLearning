console.log(`========================ques1=====================`);
let arrayNumbers=[22,11,44,55,77,33];
for (let index = 0; index < arrayNumbers.length; index=index+2) 
{
   
    console.log(`even position in array  : ${arrayNumbers[index]}`);
    
}
    
console.log(`========================ques2=====================`);

var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
  sum=sum+arrayNumbers[index];
    
}
console.log(`sum the array element :-  ${sum}`);