function Student(student_name,student_age,student_gender){
    this.name=student_name,
    this.age=student_age,
    this.gender=student_gender
}

const obj1 = new Student('Pankaj',23,'Male');
const obj2 = new Student('Reena',25,'Female');
const obj3 = new Student('Rajeev',26,'Male');

Student.prototype.branch='CSE';
Student.prototype.college='ABC';

console.log(obj1.name+ ' college is '+obj1.college);
console.log(obj2.name+ ' branch is ' +obj2.branch);
console.log(obj3.name+ ' branch is ' +obj3.branch + ' and college is '+ obj3.college);