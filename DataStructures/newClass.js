class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.scores = [];

  }

  fullName(){
      return `${this.firstName} ${this.lastName}`
  }

  addScores(score){
    this.scores.push(score)
  }

  calculateAvg(){
      let add = this.scores.reduce((a,b) => a + b);
      return add/this.scores.length;

  }
}

/* Instantiation */
var newStudent = new Student("superman", "modi"); //Instance of the class
newStudent.addScores(92);
newStudent.addScores(87);
newStudent.addScores(67);
newStudent.addScores(77);

console.log(newStudent.calculateAvg());