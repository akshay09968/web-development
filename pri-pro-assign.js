class Vehicle{
    #capacity=4000;
    name='';
    constructor(name){
        this.name=name;
    }

    startEngine(){
        console.log(`${this.name} can start and has a capacity of ${this.#capacity}`);
    }

    stopEngine(){
        console.log(`${this.name} can stop and has a capacity of ${this.#capacity}`);
    }

    run(){
        console.log(`${this.name} can run on manual mode`);
    }

    static brake(){
        console.log(`${this.name} has this much ${this.#capacity} capacity`);
    }
}

class W2 extends Vehicle{
    tyre=2;
    engine=3000;
    constructor(name,tyre,engine){
        super(name);
        this.tyre=tyre;
        this.engine=engine;
    }
    
}

class W3 extends Vehicle{
    tyre=3;
    engine=6000;
    constructor(name,tyre,engine){
        super(name);
        this.tyre=tyre;
        this.engine=engine;
    }
    
}

const v1 = new W2('2 wheeler');
const v2 = new W3('3 wheeler');

console.log(v1.name);
console.log(v1.engine);
v1.startEngine();
v1.stopEngine();

console.log("---------------");

console.log(v2.name);
console.log(v2.engine);
v2.startEngine();
v2.stopEngine();