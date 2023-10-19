let greet = () => console.log("Hello");
greet();

//conditional statements

let age = 5;
let welcome = (age < 18) ?
() => console.log('baby') :
() => console.log('adult');

welcome();

console.log('---------------------------------');

//this with arrow function
function Person(){
    this.name='aksh',
    this.age=22,
    this.sayName = function(){ // function expression
        console.log(this.age);
        let innerFunc = () => console.log('Age inside inner function is : '+ this.age);
        innerFunc();
    }
}

const x1 = new Person();
x1.sayName();