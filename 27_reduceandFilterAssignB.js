
console.log(`=============================using filter and reduce===================================`);

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
console.log(`===============employe from wipro company=============`);

// ***********************using for each ************************
// const arrayWipro = arremplyee.filter((employee) => {
//     return employee.emp_cmpny =="wipro";
//   });

//   arrayWipro.forEach((employee) => {
//   console.log(`Employee Name: ${employee.emp_name}`);
// });

// *************************using reduce*********************
const arrayNamesWipro = arremplyee .filter((employee) => {
    return employee.emp_cmpny =="wipro";
  });
  const wiproEmp=arrayNamesWipro.reduce((runningTotal,employee)=>{
   // console.log(employee);
    runningTotal.push(employee.emp_name);
    return runningTotal;
  },[])
  console.log(`Employee Name: ${wiproEmp}`);
  console.log(`                                                                     `);
console.log(`===============employe from IT Or HR company=============`);


const attayithr = arremplyee.filter((employee) => {
    return employee.emp_dept =="it"||employee.emp_dept =="hr";
  });
 
//   attayithr.forEach((employee) => {
//   console.log("name :=", employee.emp_name);
// });
const dept=attayithr.reduce((runningTotal,employee)=>{
    runningTotal.push(employee.emp_name);
    return runningTotal;
  },[]);
  console.log(`Employee Name: ${dept}`);
  console.log(`                                                                     `);
console.log(`===============employe id greatter than 50=============`);

const arrayid = arremplyee.filter( (employee )=> {
    return employee.emp_id > 50;
} );
// arrayid.forEach((employee)=>{
//     console.log(`employee name of array id greatter than 50  ${employee.emp_name}`);
// });
const id=arrayid.reduce((runningTotal,employee)=>{
    runningTotal.push(employee.emp_name);
    return runningTotal;
  },[]);
  console.log(`Employee Name: ${id}`);
  console.log(`                                                                     `);
console.log(`============Employees name starts with 'a,v,m'===================== `);

const arrayNames=arremplyee.filter((employee)=>{
  return employee.emp_name.startsWith('a') ||  employee.emp_name.startsWith('v') ||  employee.emp_name.startsWith('m') ;
    })
    const startWith=arrayNames.reduce((runningTotal,employee)=>{
               runningTotal.push(employee.emp_name);
               return runningTotal;
    },[]);
    console.log(`Employee Name: ${startWith}`);
    console.log(`                                                                     `);
    console.log(`===================== Average salary of all employee==============`);

    
    const averageSalary= arremplyee.reduce( (runningTotal, employee)=>{
        return runningTotal + employee.emp_salary/arremplyee.length;
    }, 0);
// console.log(sum);    
  
        console.log(` Average salary of all employee: ${averageSalary}`);
        console.log(`                                                                     `);
console.log(`=========================Average salary for 'IT' department================================`);

const arraySalaryIT=arremplyee.filter((employee)=>{
    return  employee.emp_dept=='IT';
        })

const average=arremplyee.reduce((runningTotal,employee)=>{
    return runningTotal+employee.emp_salary/arremplyee.length;
},0);
console.log(`Average salary for IT department : ${average}`);

