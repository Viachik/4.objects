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
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function addMarks(...mark) {
  this.marks.push(...mark);
}

Student.prototype.getAverage = function getAverage(marks) {
  return this.marks.reduce((acc, mark)=> acc + mark, 0)/marks.length;
}

Student.prototype.exclude = function exclude(reason) {
  if (student.hasOwnProperty('subject')) {
    delete this.subject;
  }
  if (student.hasOwnProperty('marks')) {
    delete this.marks;
  }
  this.excluded = reason;
}
