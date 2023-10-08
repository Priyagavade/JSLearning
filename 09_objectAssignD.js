

let professor=
{
   name:"priya",
   Education:"BE",
   Branch:"Computer",
   clg_name:"VPKBIET",
   Programming_language:["Java","html","python",".net","c++","R"],
    degree:
    {
        engineering:"CSE",
        PHD:"Adv Computing",
        Diploma:"Information Technology",
    },
    certificate: ["Hacker Rank", "WIFE course", "adv computing"],

    totalExperience:"14years",
}
console.log("=============Add five properties=======================");
console.log(professor);

console.log(`===============Nested Object "Degree" =====================`)

console.log(professor.degree);

console.log(`===============Add one Array "certificates"  =====================`)
console.log(professor.certificate);
console.log(professor);

console.log(`===============add new property "Total Experience" =====================`)
console.log(professor.totalExperience);
console.log(professor);

console.log(`===============modify existing property---->"total experience & engineering" =====================`)
professor.totalExperience=30;
//console.log(professor.totalExperience);
console.log(professor);

console.log(`===============___________________________________  =====================`)
professor.engineering="Mechanical";
console.log(professor.degree);
console.log(professor);
console.log(`===============add new certificate "oracle" at the end =====================`)
professor.certificate.push("oracle");
 console.log(professor.certificate);
 console.log(professor);

 console.log(`===============log array "Certificate"  =====================`)
 console.log(professor.certificate);
 console.log(professor);

 console.log(`===============log complete object on console  =====================`)
console.log(professor);

console.log(`===============traverse array-->"certificate" =====================`)
for (const certi of professor.certificate) {
    console.log(certi);
}