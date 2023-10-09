

    const bankSbi =
    {
            Branch:"Indapur",
            Location:"Raigad",
            year:1955,
            Ecomerse:"Yono",
    }
     console.log(`===========================step 1 =====================================`);
    console.table(bankSbi);

    const bankLocation=
    {
            street:"talashet",
            city:"mangaon",
            pin:402112,
    }
    console.log(`===========================step 2 =====================================`);
    console.table(bankLocation);

    const rateOfInterest=
    {
        objectloanInterest:"23%",
        personalLoanInterest:"45%",
        dueinterest:"56%",
    }
    console.log(`===========================step 4 =====================================`);
    console.table(rateOfInterest);

  
    console.log(`===========================step 3  =====================================`);
    console.log(`_____________________clone the step 1 ,2, into step 3______________________________`);
    const banklocClone = Object.assign({},bankLocation)
  
      console.log(`bankclone from banklocation first property is street: ${banklocClone.street}
bankclone from banklocation second property is city:  ${banklocClone.city}
bankclone from banklocation third property is pin:  ${banklocClone.pin}`);
     

    console.log(`===========================step 5 =====================================`);
    console.log(`________________merge step 1,,2,4 into the new object "sbidetail"_________________________"`);
        const sbidetail=  {}
        Object.assign(sbidetail,bankSbi,bankLocation,rateOfInterest );
        console.table(sbidetail);


        console.log(`===========================step 6  =====================================`);
        console.log(`__________________________-traverse the merge object using step 5 using for in loop________________`);
   for (const key in sbidetail) {
    console.log(key, sbidetail[key]);
        
    }
   