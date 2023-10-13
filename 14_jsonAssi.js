

const postInString = `{
    "name": "Aleix Melon",
    "id": 1,
    "role": ["Dev","Dba"],
    "age": 23,
    "doj":"11-12-2019",
    "married":false,
    "address":
    {
        "street":"32,laham st.",
        "city":"Innsbrrruck",
        "country":"Austria"
    },
   
    "referred_by":"E0012"
}`
console.log(typeof postInString);
console.log(`=============================================================================`);
const post = JSON.parse(postInString);
console.log(`convert string to object by using json:--${typeof post}`);
console.table(post);
console.log(`=============================================================================`);
console.log(`last word of role is : ${post.role[0]}`)

console.log(`=============================================================================`);
 let array  =post.name.split(" ");
  console.log(`log only last name  ${array[1]}`);

  console.log(`=============================================================================`);
let array2  = post.doj.split("-");
console.log(`=============================================================================`);
console.log(`log only joining year ${array2[2]}`);
