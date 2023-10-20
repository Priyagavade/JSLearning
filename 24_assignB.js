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
console.log(`-------name and department  of employee working in tcs company-------------------`);
arremplyee.forEach( (employee)=>{
        if(employee.emp_cmpny=="tcs")
      
        console.log(`employee working in : name ${employee.emp_name},department: ${employee.emp_dept}`);
       
})  
console.log(`----------------------------------------------------------------------------------`);
console.log(`-------name and company  of employee in financy department-------------------`);
arremplyee.forEach( (employee)=>{
        if(employee.emp_dept=="finance")
      
        console.log(`employee working in : name ${employee.emp_name},company: ${employee.emp_cmpny}`);
       
}) 
console.log(`----------------------------------------------------------------------------------`);
console.log(`-------details of employee whoes start with "R"------------------`);
arremplyee.forEach( (employee)=>{
        if(employee.emp_name.startsWith('r'))
      
        console.log(`employee working in :name ${employee.emp_name},departmeny: ${employee.emp_dept},salary:${employee.emp_salary},company: ${employee.emp_cmpny}`);
       
}) 

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------employee whoes salary is gretter than 75000------------------`);
arremplyee.forEach( (employee)=>{
        if(employee.emp_salary>75000)
      
        console.log(`employee working in :name ${employee.emp_name},salary:${employee.emp_salary},company: ${employee.emp_cmpny}`);
       
}) 

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------employee whoes salary is gretter or equal  50000 and form "IT" department------------------`);
arremplyee.forEach( (employee)=>{
        if(employee.emp_salary>=50000 && employee.emp_dept=="it")
      
        console.log(`employee working in :name ${employee.emp_name},departmeny: ${employee.emp_dept},salary:${employee.emp_salary},company: ${employee.emp_cmpny}`);
       
}) 
console.log(`----------------------------------------------------------------------------------`);
console.log(`-------employee whoes company is "infy"-----------------`);
arremplyee.forEach( (employee)=>{
        if(employee.emp_cmpny=="infy")
      
        console.log(`employee working in :name ${employee.emp_name},departmeny: ${employee.emp_dept},salary:${employee.emp_salary},company: ${employee.emp_cmpny}`);
       
}) 
console.log(`--------------------------------------------=======================`);
const arrayEmpNames = arremplyee.map( (employee)=> {
        return employee.emp_name;
    } );
    console.log(arrayEmpNames);