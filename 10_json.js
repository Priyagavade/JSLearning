const id="120"
const number=+id
console.log(typeof number);


const postInString = `{
    "userId": 1,
    "id": 1,
    "title": "On Trip",
    "body": "Feeling awesome.. after long break"
}`
console.log(typeof postInString);
const post = JSON.parse(postInString);
console.log(`==========================================`);
console.log(typeof post);
console.log(post);
console.log(`==========================================`);

const person = {
    name: "Jenny",
    age: 34,
    city: "Pune" 
}
console.log(`==========================================`);
console.log(typeof person);
console.log(`==========================================`);
const personJson =JSON.stringify(person);
console.log(typeof personJson);
console.log(personJson);

//{"name":"Elon Musk","age":54,"totalCompany":9,"companies":{"tesla":"300B USD","twitter":"150B USD","spacex":"200B USD"},"kidsName":["Deny","Weny","Rony","Randy","Sony","Mony"]}