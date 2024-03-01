function reverstring(string){
    let strlen=string.length;
    let reverse=" ";
    console.log(string);

    for (let index = strlen-1; index >=0 ; index--) {
      reverse+=string[index];

}console.log(`{string} of reverse ${reverse}`);
    
}
reverstring("priya")