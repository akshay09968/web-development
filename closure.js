// outer function

function greet() {

    // variable defined outside the inner function
    let name = 'John';
    console.log("i am inside greet function()");

    // inner function
    function displayName() { // closure function
       let r = 45;
        // accessing name variable
        return 'Hi' + ' ' + name;
    }
    return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

console.log('------------------------------------------');


//----------------------Example 2:---------------------------------
function calculate(x) {
    function multiply(y) {   //closure function
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);   // 1st case
const multiply4 = calculate(4);   // 2nd case

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8

console.log('------------------------------------------');