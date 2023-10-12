

let bankSbi =
{
        Branch:"Indapur",
        Location:"Raigad",
        year:1955,
        Ecomerse:"Yono",
}

console.table(bankSbi);

    let bankLocation=
    {
            street:"talashet",
            city:"mangaon",
            pin:402112,
    }

    console.table(bankLocation);

console.log(`log the  banksbi and bank location  using obj.assign, and abj,spread`);
  let banklocClone = Object.assign({},bankLocation,bankSbi)  

    let clonebankloc = { ...bankLocation,...bankSbi}; // Deep clone using spread operator
    clonebankloc.city = "nashik";
    console.log(`using sprade operator change value of bank location := ${bankLocation.city}`);
    clonebankloc.Branch="mahad";
    console.log(`using sprade operator change value of bank branch:-${bankSbi.Branch}`);

    const rateOfInterest=
    {
        objectloanInterest:"23%",
        personalLoanInterest:"45%",
        dueinterest:"56%",
    }
    console.log( `                                                 `);
    console.table(rateOfInterest);



    console.log(`________________merge step 1,,2,4 into the new object "sbidetail"_________________________"`);
    const sbidetail=  {}
    Object.assign(sbidetail,bankSbi,bankLocation,rateOfInterest );
    console.table(sbidetail);


   
    console.log(`__________________________-traverse the merge object using above merge object using for in loop________________`);
    for (const key in sbidetail) {
     console.log(key, sbidetail[key]);
         
     }
   
