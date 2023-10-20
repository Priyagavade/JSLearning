


const arr =  [4,  5,  3, 2, 7];
            // [16, 25, 9, 4, 49]

const arrayTransform = arr.map( (currentValue)=> {
    return currentValue*currentValue;
} );
 console.log(arrayTransform);

const transformedArray = [];
arr.forEach( (num)=> {
    transformedArray.push(num*num); 
} );
console.log(transformedArray);

const arraynum =  [4,  5,  3, 2, 7];
                //[4,  6,  5, 5, 11]
const newArray = arraynum.map( (currentValue, index )=> {
     return currentValue + index;
});
console.log(newArray);





const emp_anil=(22,"anil","it",50000,"tcs");
const emp_radha=(33,"radha","hr",74000,"wipro");
const emp_rishi= (55,"rishi","finance",4700,"tcs");
const emp_sonali=(66,"sonali","finance",45000,"infy");
const emp_monika=(77,"monika","it",40000,"wipro");
const emp_viny =(88,"vinayak","it",75000,"tcs");
const emp_mahi=(99,"mahesh","hr",85000,"infy");



 const arrempl=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

const arrayemp = arrempl.map( (employee)=> {
    return employee.emp_name;
} );
console.log(arrayemp);