
class Vehicle
{
    Vehicletype
    color
    seats
    price

        constructor(Vehicletype,color,seats,price)
        {
            this.Vehicletype = Vehicletype;
            this.color= color;
            this.seats= seats;
            this.price = price;
        }
}
const car1 = new Vehicle("SUV","red","4seat"," 10.27 Lakh");


const car2=new Vehicle("minivan","Blue","5seat"," 5.27 Lakh");


const car3=new Vehicle("seadan","White","4seat"," 50.22Lakh");


const car4=new Vehicle("Hatchback","White","6seat"," 40.22Lakh");


const arrayVehicle = [car1,car2,car3,car4];

console.log(`----------------------------------------step 1(traverse array)-----------------------------------------------`);
    for (const element of arrayVehicle) {
        //element.details();
        console.log(element);
    }
  

 class College
 {
        // methods

        constructor (college_name,university,department,NACRank)
        {
             this.college_name=college_name;
             this.university=university;
             this.department=department;
             this.NACRank=NACRank;
        }
       display(){
         console.log(`display: ${this.college_name}, ${this.university}, ${this.department}, ${this.NACRank}`);
   }

    
}
console.log(`--------------------------------------------step 2 (using method)------------------------------------`);
const college1=new College("VPKBIET","SPPU ","9","A+");
console.log(`college1  display:college_name: ${college1.college_name},university:${college1.university},department: ${college1.department},NACrank: ${college1.NACRank} `);

 const college2=new College("BATU","BATU",7,"A");
 console.log(`college2 display:college_name:${college2.college_name},university:${college2.university},department:${college2.department},NACrank:${college2.NACRank}`);


const college3=new College("COEP","SPPU",9,"A+");
console.log(`college3 display:college_name:${college3.college_name},university:${college3.university},department:${college3.department},NACrank:${college3.NACRank}`);


 const college4=new College("DY.PATIL","SPPU",7,"A");
 console.log(`college4 display:college name:${college4.college_name},university:${college4.university},department:${college4.department},NACrank:${college4.NACRank}`);

 function traverse(objectcollege)
 {
        for (const key in objectcollege) {
            console.log(objectcollege[key]);
          
        }
 }
 console.log(`-----------------------------------step 3(traverse using function)----------------------------------------------------`);
 console.log(`college_name:${college1.college_name} 
 university:${college1.university}
department:${college1.department}
NACRANK:${college1.NACRank}`);
console.log(`---------------------------------------------------------------------------------------`);
 console.log(`college_name:${college2.college_name}
 university:${college2.university}
 department:${college2.department}
 NACRANK:${college2.NACRank}`);

 console.log(`---------------------------------------------------------------------------------------`);
 console.log(`college_name:${college3.college_name}
 university:${college3.university}
 department:${college3.department}
 NACRANK:${college3.NACRank}`);
 console.log(`---------------------------------------------------------------------------------------`);

 console.log(`college_name:${college4.college_name}
 university:${college4.university}
 department:${college4.department}
 NACRANK:${college4.NACRank}`);
