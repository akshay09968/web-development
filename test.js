let percent = 34;
console.log("The % outside: "+ percent);

let total = 344;
console.log("the total outside: "+total);
{
    let percent=23;
    let total=45;
    console.log("the total is : "+total);
}
console.log("the % is "+ percent);

//const

const pi = 3.142;
console.log("value of pi: " + pi);

// pi=3.12;
// console.log("value of pi: " + pi);

function add(){
    let sum = 0;
    for(let i = 0; i < arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1,2));
console.log(add(1,2,3,4,5,6));
 