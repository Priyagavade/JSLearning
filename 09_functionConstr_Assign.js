

function  bank(bankName,Location,ifcCode,branchCode)
{
this.bankName=bankName;
this.Location=Location;
this.ifcCode=ifcCode;
this.branchCode=branchCode;
  
}
console.log(`                                                                                        `);
const sbiBank=new bank("SBI","pune",232345,"B456");
console.log(`Bank details of  SBI bank:--->bank_name:-${sbiBank.bankName},Location:--${sbiBank.Location},ifcCode:--${sbiBank.ifcCode},branchCode:--${sbiBank.branchCode}`);
//console.log(sbiBank.bankName, sbiBank.Location, sbiBank.ifcCode,sbiBank.branchCode);
console.log(`                                                                                        `);
const mahBank=new bank("MAHA","raigad",564678,"B564");
console.log(`Bank details of  SBI bank:--->bank_name:-${mahBank.bankName},Location:--${mahBank.Location},ifcCode:--${mahBank.ifcCode},branchCode:--${mahBank.branchCode}`);
console.log(`                                                                                        `);
const axisBank=new bank("AXIS","baramati",234098,"B878");
console.log(`Bank details of  SBI bank:--->bank_name:-${axisBank.bankName},Location:--${axisBank.Location},ifcCode:--${axisBank.ifcCode},branchCode:--${axisBank.branchCode}`);
console.log(`                                                                                        `);

const YESBank=new bank("YESbank","lonere",676567,"B987");
console.log(`Bank details of  SBI bank:--->bank_name:-${YESBank.bankName},Location:--${YESBank.Location},ifcCode:--${YESBank.ifcCode},branchCode:--${YESBank.branchCode}`);

console.log(`                                                                                        `);
bank.prototype.open_time= "9 AM IST";
console.log(`opening time of SBI_bank is:${sbiBank.open_time}`);
console.log(`opening time of MAHA_Xbank is:${mahBank.open_time}`);
console.log(`opening time of AXIX_bank is:${axisBank.open_time}`);
console.log(`opening time of YES_bank is:${YESBank.open_time}`);
console.log(`                                                                                        `);
bank.prototype.close_time= "6 AM IST";
console.log(`closing time of SBI_bank is:bank_name is:-->${sbiBank.bankName} & branch_code is:-->${sbiBank.branchCode} closing time- is ${sbiBank.close_time}`);
console.log(`closing time of MAHA_Xbank is: bank_name is:-->${mahBank.bankName} & branch_code is:-->${mahBank.branchCode} closing time- is ${mahBank.close_time}`);
console.log(`closing time of AXIX_bank is: bank_name is:--> ${axisBank.bankName} & branch_code is:-->${axisBank.branchCode} closing time- is ${axisBank.close_time}`);
console.log(`closing time of YES_bank is:  bank_name is:--> ${YESBank.bankName} & branch_code is:-->${YESBank.branchCode} closing time- is ${YESBank.close_time}`);
