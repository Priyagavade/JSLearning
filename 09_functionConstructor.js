


function Bank(bankName, city, pin){
    this.bankName = bankName;
    this.city = city;
    this.pin = pin;
    this.show = function(){
        console.log(`Bank Details is: ${this.bankName} ${this.city} ${this.pin}`);
    }

}
const sbiBank = new Bank('SBI', 'Pune', 112233);
console.log(sbiBank);
console.log(sbiBank.bankName, sbiBank.city, sbiBank.pin);

const axisBank = new Bank('Axis', 'Mumbai', 445566);
console.log(axisBank);
const hdfcBank = new Bank('HDFC', 'Banglore', 889977);
console.log(hdfcBank);

Bank.prototype.country = "Bharat";
console.log(axisBank.country);
console.log(hdfcBank);
console.log(hdfcBank.country);

sbiBank.show();
axisBank.show();


//instance of object in subobject
console.log(axisBank instanceof Bank);



//build in method

const date = new Date();
console.log(date);

const square10 = Math.pow(10,2);
console.log(square10);

const maxNum=Math.max(23.56, 67, 89, 90.567, 45, 67);
console.log(maxNum);