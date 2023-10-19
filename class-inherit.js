class Point2D {
    constructor (x, y) {
        this.move(x, y); // this means = current class method or variable
    }
    move (x, y) {
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point2D {
    constructor (x, y, z) {
        super(x,y);
        this.z = z;
        //this.move(x, y, z);
    }
    move (x, y, z) {
        super.move(x, y);
        this.z = z;
    }
}

var point3d = new Point3D(5, 3, 6);

console.log(point3d.x); // => 5
console.log(point3d.z);

point3d.move(10,20,30);
console.log(point3d.x); // => 10
console.log(point3d.z);
console.log("--------------------");

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sing() {
        return `${this.name} can sing and the age is ${this.age}`;
    }
    
    dance() {
        return `${this.name} can dance`;
    }
} 

class Cats extends Animals {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
let clara = new Cats("Clara", 33, "indigo");

console.log(clara.sing());
console.log(clara.whiskers());
console.log(clara.dance());