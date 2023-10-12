
console.log(`===================Reverse String======================`);
function revString(string)
{
     let strlen=string.length;
     let revstr=" ";// initilize null value
     console.log(string); /* java */
    // console.log(string[strlen-1]); // print last index is a
   
    for (let index = strlen-1; index >=0; index--) {
       // console.log(string[index]);   /*  rever--> a v a j */
      revstr+=string[index];
        
     }
      console.log(`${string} of rever is ${revstr}`);
}
revString("java")
revString("codemind")


console.log(`===========================palindrom===================================`);

function palinString(string1)
{
    let len=string1.length;
    let msg="is palindrom";
    console.log(string1); 

    for (let index = 0; index < len/2; index++) {
    if (string1[index]!=string1[len-1-index]) {
      msg="is not  palindrom";
    }
      
    }
   
  console.log(`${string1}:${msg}`);
 }

palinString("dad") 
palinString("java") 
