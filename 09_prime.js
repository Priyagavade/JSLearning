
// //console.log(`prime number`);

// function prime(num)
// {
//         let count=0;
//         for (let index = 1; index <=num; index++)
//         {      /*   1         1<=11         2        */
//             if (num%index==0)
//             /*    11%2==1             */
        
//             count++; /* count 1    if number is devided in any of 2 number then and then only incr count otherwise "no"                                   */
//         }

//             if(count==2)  /*   if answer is 0 and ccount incre and match to the given range then  op is not prime */
//             {
//                 console.log(`prime number ${num}`); /* count doesnt match given range op number is prime like 11 */
//             }
//                 else
//                 {
//                     console.log(`not prime number ${num}`);/* count doesnt match given range op number is  not prime like 10*/
//                 }
// }
// prime(11)
// prime(10)
// prime(8)
// prime(13)
// prime(45)
// prime(19)

console.log(` WAP to count the total prime number from the array.`);
const array = [11, 3, 6, 10, 43, 29, 50];
function isPrime(num) {
   
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  
 
  let count = 0;
  
  for (const num of array) {
    if (isPrime(num)) {
      count++;
    }
  }
  
  console.log(`Total prime numbers in the array: ${count}`);