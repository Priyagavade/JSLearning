


console.log(`=============================using accending and descending===================================`);

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
console.log(`                                                                                    `);
console.log('======= employee id in  descending ================');

// Sorting an array in ascending order
const arraydescid = arremplyee.sort( (emp1, emp2) => {
    return emp1.emp_id>emp2.emp_id ? -1 : 1;
} );
arraydescid.forEach(Employee => {
    console.log(` employee details are emp_id:  ${Employee.emp_id} , name:  ${Employee.emp_name}, department: ${Employee.emp_dept}`);
});
console.log(`                                                                                `);              
console.log('======= ascending order of employee department================');

// Sorting an array in ascending order
const arrayascdept = arremplyee.sort( (emp1, emp2) => {
    return emp1.emp_dept>emp2.emp_dept ? 1 : -1;
} );
arrayascdept.forEach(Employee => {
    console.log(` employee details employee department:   department: ${Employee.emp_dept} , ${Employee.emp_id} , company ${Employee.emp_cmpny}`);
});
console.log(`                                                                                     `);
console.log('=======descending  order of employee salary================');

// Sorting an array in ascending order
const arraydescsalary = arremplyee.sort( (emp1, emp2) => {
    return emp1.emp_salary>emp2.emp_salary ? -1 : 1;
} );
arraydescsalary.forEach(Employee => {
    console.log(` employee details employee salary:  name:  ${Employee.emp_name} ,salary ${Employee.emp_salary} , company ${Employee.emp_cmpny}`);
});
console.log(`                                                                      `);