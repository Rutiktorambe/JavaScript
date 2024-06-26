// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra",
];

// for (let i = 0; i < myStates.length; i++) {
//   if (typeof myStates[i] !== "string") break;
//   console.log(myStates[i]);
// }

// while (i < myStates.length) {
//   console.log(myStates[i]);
//   i++;
// }

// let i = 20;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);



// var i = 0;

// for (;;) {
//   if (i > 3) break;
//   console.log(i);
//   i++;
// }

myStates.forEach((s) => (console.log(s)));
myStates.forEach((s) => console.log(s));



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
