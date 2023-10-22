class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_cmpny){

        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_cmpny=emp_cmpny;

    }


}

const emp_anil=new Employee(22,"anil","it",50000,"tcs");
const emp_radha=new Employee(33,"radha","hr",74000,"wipro");
const emp_rishi=new Employee(55,"rishi","finance",4700,"tcs");
const emp_sonali=new Employee(66,"sonali","finance",45000,"infy");
const emp_monika=new Employee(77,"monika","it",40000,"wipro");
const emp_viny =new Employee(88,"vinayak","it",75000,"tcs");
const emp_mahi=new Employee(99,"mahesh","hr",85000,"infy");

const arremplyee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`Step1- Find the emplyee name who working in TCS company`);
const arrayNamesTcs = arremplyee
  .filter((employee) => {
    return employee.emp_cmpny =="tcs";
  });

arrayNamesTcs.forEach((employee) => {
  console.log(`Employee Name: ${employee.emp_name}, Company: ${employee.emp_cmpny}`);
});
console.log(`------------------------------------------------------------------------------`);

console.log(`Step2- Find average salary of employee from company Wipro`);

const arrayWipro=arremplyee.filter((employee)=>{
        return employee.emp_cmpny=="wipro";
}).map((employee)=>{
            return employee.emp_salary;
});
console.log(arrayWipro);


let sum=0;
for (let index = 0; index < arrayWipro.length; index++) {
     sum+= arrayWipro[index];
    }
let avgSalary=sum/arrayWipro.length;
console.log(`Average salary will be: ${avgSalary}`);
console.log(`-----------------------------------------------------`);

console.log(`Step3- Find average salary of employee from company Wipro  or Infy`);

const cmpytwo=arremplyee.filter((employee)=>{
    return employee.emp_cmpny=="wipro" || employee.emp_cmpny=="infy";
}).map((employee)=>{
        return employee.emp_salary;
});
//console.log(cmpytwo);

let total=0;
for (let index = 0; index < cmpytwo.length; index++) {
 total+= cmpytwo[index];
}
let averageSalary=total/cmpytwo.length;
console.log(`Average salary will be: ${averageSalary}`);

console.log(`Step 3 ==> Average salary of employee from company 'Wipro or Infy'`);


            // const arraySalary1 = arremplyee.filter((employee)=>{
            //     return  employee.emp_cmpny =="wipro" || employee.emp_cmpny =="infy";
  
            //   })
        
            //  const arraySalaryEmp1 = arraySalary1.map((employee)=>{
            //          return employee.emp_salary;
  
            //   })
            //   console.log(arraySalaryEmp1);
  
            //   let sumSalary=0;
            //   let countEmp1 = arraySalaryEmp1.length;
            
            //   arraySalaryEmp1.forEach(n=>sumSalary+=n);
            //   console.log(`Average salary will be: ${sumSalary/countEmp1}`);