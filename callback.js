function greet1(){
    console.log('hello');
}

function sayName(name){
    console.log('hello '+ ' '+ name);
}

function bye(){
    console.log('bye bye');
}

setTimeout(greet1,1000);
sayName('John');
setTimeout(bye,2000);