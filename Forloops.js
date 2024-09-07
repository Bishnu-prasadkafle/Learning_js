//for loop
//program to add first n natural numbers\
/*
let sum = 0;
let n = 5;
for (let i = 0; i < n; i++) {
  sum += i + 1;
}
console.log("sum of first" + n + "natural number is " + sum);*/
/*
//for in loop
let obj = {
  bipin: 90,
  alex: 85,
  sajan: 80,
  kaka: 60,
  uncle: 27,
};
for (let a in obj) {
  console.log("marks of " + a + " are " + obj[a]);
}
*/

let obj = {
  bipin: 90,
  alex: 85,
  sajan: 80,
  kaka: 60,
  uncle: 27,
};
for (let a of "bipin") {
  console.log(a);
}
