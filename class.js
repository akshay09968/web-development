class Person{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }

    get personName(){
        return this.name;
    }

    set personName(x){
        this.name=x;
    }
}

const person1 = new Person('John');
const person2 = new Person('Cena');

console.log(person1.name);
console.log(person2.name);