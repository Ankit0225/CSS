console.log(1 , typeof 1)

console.log('adgfds', typeof 'adgfds') 

let b=[1,2,3,4,5]
console.log(b)
console.log('Hello World')
 
function fun(){
let a=5;
if(a===5){
     f=10
console.log("Inside" ,f);
}
console.log("outside",f);
}
fun();
console.log("Global",f);

//
function multiply(a,b =1){
    return(a*b)
}
multiply();
console.log(multiply(5,10));

function squareroot(n){

    console.log(Math.sqrt(n));
    return "This is your Answer";
}

//Function Hoisting
