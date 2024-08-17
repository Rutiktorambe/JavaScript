// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



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
  