function area(){
    return 10*3;
}

let perimeter = () => 30;

function calculate (a,b=20,c=b*area(),d=c+perimeter()){
    return a+b+c+d;
}

console.log(calculate(20));
console.log(calculate(20,50,70,60));
console.log(calculate(40,50));