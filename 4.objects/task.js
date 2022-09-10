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

student1.setSubject("Algebra");
student2.setSubject("Geometry");

Student.prototype.addMark = function addMark(mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

student1.addMark(5);
student2.addMark(2);

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    this.marks = [...mark];
  } else {
    this.marks.push(...mark);
  }
}

student1.addMark(4);
student1.addMark(5);
student2.addMark(3);
student2.addMark(2);

Student.prototype.getAverage = function () {
  const avarage = this.marks.reduce((acc, mark)=> acc + mark, 0)/this.marks.length;
  return avarage;
}

console.log(student1.getAverage());
console.log(student1);

/*
Student.prototype.exclude = function (reason) {
  if (this.hasOwnProperty('subject')) {
    delete this.subject;
  }
  if (this.hasOwnProperty('marks')) {
    delete this.marks;
  }
  this.excluded = reason;
}
*/

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}


student2.exclude('low grades')
console.log(student2)
