//-----------------Example 2:-------------------//
function say(message='Hi') {
    console.log(message);
}

say(); 
console.log("------------------");
say(undefined); 
console.log("------------------");
say('Hello'); 
console.log("------------------");


//----------------Example 3:--------------------//
//--You can use a return value of a function as a default value for a parameter//
let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice);


//----------------Example 4:---------------------//
//--The value of the arguments object inside the function is the number//
//--of actual arguments that you pass to the function.//
function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

const m = add(10); 
console.log(m);

const n = add(10, 20); 
console.log(n);

const p = add(10, 20, 30); 
console.log(p);