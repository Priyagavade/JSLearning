

let personalDetails=
{
    name:"priyanka",
    age:25,
    address:"nashik",
    education:"BE",

}

let collegedetails=
{
    clgName:"vpkbiet",
    address:"bmt",
    grade:"A+",
    unviersity:"sppu"
}

console.log(`======================merge these 2 obect=======================`);

        Object.assign(personalDetails,collegedetails );
        console.table(personalDetails);


let friend=["pooja","riya","sayali","rutu"];
//Object.freeze(friend);
console.log(friend);
friend.splice(3,1,"nisha");
console.log(friend);
Object.freeze(friend);
console.log(friend);


for (const element of friend) {
    //element.details();
    console.log("friend names",element);
}


console.log(`===================Reverse String======================`);

const company = "Codemind Technology";
let char ='';
for (let index = company.length-1; index >=0; index--) {
     char = char + company.charAt(index);
     
     if(company.charAt(index) ==' '){
        break;
    
    }
    
}
console.log(` in reverse Codemind Technology first word is::-${char}`);


