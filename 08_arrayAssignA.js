
console.log(`==========ques1===================================`);
const arrayfruit=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayfruit);
let element0thIndex = arrayfruit[0];
console.log(`first element in the array:-  ${element0thIndex}`);

console.log(` last element in array is:  ${arrayfruit[arrayfruit.length-1]}`);

console.log(`==========ques2===================================`);

arrayfruit.unshift("Papaya");
console.log(`add "papaya" before the "babana:--> "${arrayfruit}`);

console.log(`==========ques3===================================`);
var removedElements = arrayfruit.splice(4, 1);
console.log(`removing "mango "from list:--> ${arrayfruit}`);

console.log(`==========ques4===================================`);
arrayfruit.push("pineapple")
console.log(`add "pineapple" last in list ${arrayfruit}`);

console.log(`==========ques5===================================`);
arrayfruit.splice(4,0,"Dragon Fruit");
console.log(`add  "Dragon Fruit" before "water melon" --> ${arrayfruit}`);


console.log(`==========ques6===================================`);

arrayfruit.splice(2, 1, "Kivi");
console.log(`replace "orange" with "Kivi" --> ${arrayfruit}`);

console.log(`==========ques7===================================`);
const arrayElements1 = arrayfruit.slice(1, 5);
console.log(`start index from 1 to 4:-->  ${arrayElements1}`)

console.log(`==========ques8===================================`);
const arrayElements = arrayfruit.slice(4, 7);
console.log(`last of three element:-->  ${arrayElements}`)




