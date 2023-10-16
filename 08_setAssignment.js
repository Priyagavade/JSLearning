
class Bank
{
         constructor(bank_name,location,acc_no,ifcCode,interest_rate)
        {
            this.bank_name = bank_name;
            this.location= location;
            this.acc_no= acc_no;
            this.ifcCode = ifcCode;
            this.interest_rate=interest_rate;
        }
        
}



const axisbank=new Bank("axis","mumbai",767876,"A5643","95%");
console.log(`Bank details of  axisbank:--->bank_name:-${axisbank.bank_name},Location:--${axisbank.location},acc_no:--${axisbank.acc_no},ifc_code:--${axisbank.ifcCode},interest_rate:--${axisbank.interest_rate}`);

const sbiBank=new Bank("SBI","pune",232345,"B456","45%");
console.log(`Bank details of  SBI bank:--->bank_name:-${sbiBank.bank_name},Location:--${sbiBank.location},acc_no:--${sbiBank.acc_no},ifc_code:--${sbiBank.ifcCode},interest_rate:--${sbiBank.interest_rate}`);


const icicibank=new Bank("ICICI","nashik",65467,"I856","65%");
console.log(`Bank details of  icicibank:--->bank_name:-${icicibank.bank_name},Location:--${icicibank.location},acc_no:--${icicibank.acc_no},ifc_code:--${icicibank.ifcCode},interest_rate:--${icicibank.interest_rate}`);

const kotakbank=new Bank("KOTAK","mahad",768904,"K234","62%");
console.log(`Bank details of  kotakbank:--->bank_name:-${kotakbank.bank_name},Location:--${kotakbank.location},acc_no:--${kotakbank.acc_no},ifc_code:--${kotakbank.ifcCode},interest_rate:--${kotakbank.interest_rate}`);

const HDFCbank=new Bank("HDFC","murud",5645678,"H234","47%");
console.log(`Bank details of HDFCbank:--->bank_name:-${HDFCbank.bank_name},Location:--${HDFCbank.location},acc_no:--${HDFCbank.acc_no},ifc_code:--${HDFCbank.ifcCode},interest_rate:--${HDFCbank.interest_rate}`);

const punjabbank=new Bank("PUNJAB","mumbai",234567,"P274","88%");
console.log(`Bank details of punjabbank:--->bank_name:-${punjabbank.bank_name},Location:--${punjabbank.location},acc_no:--${punjabbank.acc_no},ifc_code:--${punjabbank.ifcCode},interest_rate:--${punjabbank.interest_rate}`);

console.log(`=======================add object element in set===================`);
const setofbank=new Set();
setofbank.add(axisbank);
setofbank.add(sbiBank);
setofbank.add(icicibank);
setofbank.add(kotakbank);
setofbank.add(HDFCbank);
setofbank.add(punjabbank);
console.log(setofbank);
console.log(`=====================================traverse set using for of loop================================`);
for (const element of setofbank) {
 console.log(`bank name:- ${element.bank_name}  location :-${element.location}`);
 
} 





