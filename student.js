
function Student (fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.name = fname.concat(" ").concat(lname);
  this.courses = [];
  this.enroll = function (course) {
    this.courses.push(course);
    course.add_student(this);
  };
  this.courseLoad = function () {
    var result = {}
    for (var i = 0; i < this.courses.length; i++) {
      var course = this.courses[i]
      if ( isNaN ( result[course.dept] ) ) {
        result[course.dept] = course.credits
      } else {
        result[course.dept] += course.credits
      }
    }
    return result
  }
}

function Course (name, dept, credits) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.students = [];
  this.add_student = function (student) {
    this.students.push(student.name)
  }
}

var bob = new Student ("Bob", "Igar")
var mary = new Student ("Mary", "Poppins")

var math101 = new Course ("easy stuff", "math", 4)
var history101 = new Course ("US Hist", "history", 5)

bob.enroll(math101)
mary.enroll(math101)
mary.enroll(history101)

console.log(mary.courseLoad())
console.log(math101.students)

function Cat (name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() { console.log( this.name + " loves " + this.owner ); }

gizmo = new Cat ("gizmo", "Ned")
curie = new Cat ("curie", "Ned")

gizmo.cuteStatement()


Cat.prototype.cuteStatement = function () { console.log( "Everyone loves " + this.name + "!" )}
Cat.prototype.meow = function () { console.log( "Meow!" )}


breakfast = new Cat ("Breakfast", "Ned")
breakfast.meow = function () { console.log("Woof!") }

breakfast.meow()
gizmo.meow()
