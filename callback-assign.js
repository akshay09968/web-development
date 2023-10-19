function areaOfRec(l,b,myFunction){
    console.log(l*b);
    myFunction(l,b,multilpy);
}

function add(l,b,callback){
    console.log(l+b);
    callback(l,b);
}

function multilpy(l,b){
    console.log(l*b); 
}

setTimeout(areaOfRec,3000,10,20,add);