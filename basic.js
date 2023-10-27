

console.log("hello priya");

function string(params) {
    var str='bts';
   // console.log('bts');
    
}
string();

//rest parameter using spread operator
function display (... args){
    console.log(args);


}
display(10.30,50);
display(100)
display("string","java")