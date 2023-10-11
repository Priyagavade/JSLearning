
//console.log(`prime number`);

function prime(num)
{
            let count=0;
        if (num>1) 
        {
            

            for (let index = 1; index <=num; index++)
            {
                if (num%index==0)
                count++;
            }

                    if(count==2)
                    {
                       console.log(`prime number ${num}`); 
                    }
                    else
                    {
                        console.log(`not prime number ${num}`);
                    }
                
            
        }

}
prime(11)
prime(8)
prime(13)
prime(45)
