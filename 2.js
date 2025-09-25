let num="90";
let a = Number(num);
switch(true){
    case ( a>=90 && a<=100):
    console.log("A");
    break;
    case(a>=75 && a<=89): 
    console.log("B");
    break;
    case(a>=50 && a<=74): 
    console.log("C");
    break;
    default: 
    console.log("Fail");
    break;
    }

let num="3";
let a=Number(num);
if(a%2==0){
    console.log("Even");
} 
else {
    console.log("Odd");
}

let s="3";
let d=Number(s);
switch(true){
    case (d>=1 && d<=5):
        console.log("it's a weekday");
        break;
        case(d>=6 && d<=7):
        console.log("it's the weekend");
        break;
        default: console.log("Invalid day");
        break;
}