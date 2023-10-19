function Person(){
    this.name='aksh',
    this.age=22,
    this.greet = function(){
        console.log('Hello');
    }
}

const person1  = new Person();
const person2  = new Person();

console.log(person1.name);
console.log(person2.age);

console.log('---------------------');

//parameterized constructor function
function Person1(person_name,person_age,person_gender){
    this.name = person_name,
    this.age = this.age,
    this.gender = person_gender,

    this.greet = function(){
        return ('Hi '+ this.name);
    }

    this.work = function(){
        return (this.name + ' is working');
    }
}

const person3 = new Person1('aksh',22,'male');
console.log(person3.age);
console.log(person3.greet());
console.log(person3.work());

//person10.dept = 'IT'; //dynamically it means this dept belongs to person10 object only
//person20.dept = 'CSE';

Person1.prototype.dept = 'CSE';        // it is common for all the objects

console.log('dept of Person 1: ' + person1.dept);
console.log('dept of Person 2: ' + person2.dept);

const person30 = new Person('Ajay', 28,'male');
console.log('dept of 3rd employee person30 : ' + person30.dept);

//create other function outside constructor function
Person1.prototype.eat = function(){
    console.log('i am eating lunch');
}

// accessing properties
console.log("this is my second : " + person30.name); // 
console.log(person30);
console.log(person30.eat());