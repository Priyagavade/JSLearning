
//console.log(`prime number`);

function prime(num)
{
        let count=0;
        for (let index = 1; index <=num; index++)
        {      /*   1         1<=11         2        */
            if (num%index==0)
            /*    11%2==1             */
        
            count++; /* count 1    if number is devided in any of 2 number then and then only incr count otherwise "no"                                   */
        }

            if(count==2)  /*   if answer is 0 and ccount incre and match to the given range then  op is not prime */
            {
                console.log(`prime number ${num}`); /* count doesnt match given range op number is prime like 11 */
            }
                else
                {
                    console.log(`not prime number ${num}`);/* count doesnt match given range op number is  not prime like 10*/
                }
}
prime(11)
prime(10)
prime(8)
prime(13)
prime(45)
prime(19)
