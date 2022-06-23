


// Student dittels 

// function constructor

function Student(Name, age, Gpa, language) {
    this.Name = Name;
    this.age = age;
    this.Gpa = Gpa;
    this.language = language;

    this.display = function () {

        document.write("Name is : " + this.Name);
        document.write("<br>");
        document.write("Your Age : " + this.age);
        document.write("<br>");
        document.write("Your GPA :" + this.Gpa);
        document.write("<br>");
        document.write("Language is : " + this.language);
        document.write("<br>");
        document.write("<br>");
        document.write("<br>");

    }
}

var student1 = new Student("khyrul islam", 22, 3.66, ["English", "Bangla", "Hindi"]);
var student2 = new Student("Shakib islam", 25, 3.55, ["English", "Bangla", "Hindi"]);
var student3 = new Student("Pollob islam", 28, 3.44, ["English", "Bangla", "Hindi"]);
var student4 = new Student("Onick islam", 31, 3.33, ["English", "Bangla", "Hindi"]);
var student5 = new Student("Alpha islam", 34, 3.22, ["English", "Bangla", "Hindi"]);

student1.display();
student2.display();
student3.display();
student4.display();
student5.display();

