function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
const student1 = new Student('Alex', 'male', 23);
const student2 = new Student('Julia', 'female', 20);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function addMark(mark) {
  if(this.marks === undefined){ 
    this.marks = marks;
  } else {
    marks.push(mark);
  }
}

Student.prototype.addMarks = function addMarks(...mark) {
  marks.push(...mark);
}

Student.prototype.getAverage = function getAverage(mark) {
  this.getAverage = getAverage(mark);
  return marks.reduce((acc, mark)=> acc + mark, 0)/marks.length;
}

Student.prototype.exclude = function exclude(reason) {
  delete prototype.subject;
  delete prototype.marks;
  this.excluded = reason;
}

let student1 = new Student("Tony", "male", 37);
student1.setSubject("Algebra");
student1.addMark(5);
student1.addMark(4);
student1.addMark(5);
console.log(student1.getAverage()); // 4.666666666666667
console.log(student1);
// {age: 37, gender: "male", marks: [5, 4, 5], name: "Tony", subject: "Algebra"}
let student2 = new Student("Buzz", "female", 35);
student2.setSubject("Geometry");
student2.addMark(2);
student2.addMark(3);
student2.addMark(2);
student2.exclude('low grades')
console.log(student2)
// {name: "Buzz", gender: "female", age: 35, excluded: "low grades"}