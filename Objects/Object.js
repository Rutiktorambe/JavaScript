var user = {
  firstName: "Rutik",
  lastName: "Torambe",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course");
console.log(user.getCourseCount());


const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

// for (const n of names) {
//   console.log(n);
// }

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}


console.log(this);

var user = {
  firstName: "Rutik",
  courseCount: 4,
  getCourseCount: function () {
    console.log("LINE 7", this);
    function sayHello() {
      console.log("Hello");
      console.log("LINE 10", this);
    }
    sayHello();
  },
};

user.getCourseCount();
