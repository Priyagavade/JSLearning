const array =  [42,  50, 3, 2, 7, 22, 11, 40];
const arrayNum = array.filter( (currentValue )=> {
    return currentValue > 10;
} );
console.log(arrayNum);

const arrayNum1 = array.filter( (currentValue )=> {
    return currentValue %2==0;
} );
console.log(arrayNum1);





const arremplyee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
// Give me the salary list of tcs employees
 // 1. Salary list
 // 2. Only TCS employees
 const arrayTcsEmployees = arremplyee.filter( (employee) => {
    return employee.emp_cmpny=='TCS';
 });
 console.log(arrayTcsEmployees);
 const arrayTcsSalary = arrayTcsEmployees.map( (employee)=> {
    return employee.emp_salary;
 } );

 console.log(arrayTcsSalary);

 // Give me the list of Infy employee names

 const arrayNamesInfy = arremplyee.filter( (employee) => {
    return employee.emp_company=='Infy';
 }).map( (employee) => {
    return employee.emp_name;
 });
 console.log(arrayNamesInfy);