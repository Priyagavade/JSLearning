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

const arrayempl=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`---------------------------find the list of all salary employee--------------------------------------------`);
const arraysal = arrayempl.map( (employee)=> {
    return employee.emp_salary;
} );
console.log(`list of employee salary is => ${arraysal}`);

console.log(`---------------------------find the list of all department employee--------------------------------------------`);
const arraydept = arrayempl.map( (employee)=> {
    return employee.emp_dept;
} );
console.log(`list of employee department  is => ${arraydept}`);


console.log(`---------------------------find the list of all id employee--------------------------------------------`);
const arrayid = arrayempl.map( (employee)=> {
    return employee.emp_id;
} );
console.log(`list of employee id  is => ${arrayid}`);