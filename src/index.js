class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  describe() {
    console.log(`${this.name}, a ${this.age} years old ${this.gender}`);
  }
  heShe() {
    //   if (this.gender) {
    //     let pronoun = this.gender.toLowerCase() == "female" ? "she" : "he";
    //     return pronoun;
    //   }
    //   return "";
  }
}

class Teacher extends Person {
  constructor(name, age, gender, id, course, contact) {
    super(name, age, gender);
    this.id = id;
    this.course = course;
    this.contact = contact;
  }
}
class Student extends Person {
  constructor(name, age, gender, id, teacher, grade, major) {
    super(name, age, gender);
    this.id = id;
    this.teacher = teacher;
    this.grade = grade;
    this.major = major;
  }
}

class Course {
  constructor(teacher, name) {
    this.teacher = teacher;
    this.students = [];
    this.name = name;
  }

  addStudent(student) {
    this.students.push(student);
  }

  describe() {
    console.log(
      `Title of this Class is ${this.name} and it's taught by ${this.teacher.name}`
    );
    console.log("\n", "\n", "Students of this class are:");
    this.students.forEach((student) => student.describe());
  }
}

const dylan = new Teacher(
  "Dylan",
  20,
  "male",
  110,
  "JavaScrip",
  "dylhack@gmail.com"
);

const lok = new Student("Lok", 27, "male", 111, "Dylan", "software devaloper");
const amy = new Student(
  "Amy",
  27,
  "female",
  112,
  "Dylan",
  "software devaloper"
);
const katie = new Student(
  "katie",
  20,
  "fmale",
  113,
  "Dylan",
  "software devaloper"
);

const js = new Course(dylan, "JavaScript");
js.addStudent(lok);
js.addStudent(amy);
js.addStudent(katie);
js.describe();
