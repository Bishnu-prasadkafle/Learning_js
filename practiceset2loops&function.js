/*a program to print the marks of a students in an object using for loop 
obj = {
  bipin: 98, alex:99 , ram: 7
}*/

let marks = {
  bipin: 98,
  alex: 99,
  sajan: 56,
  ram: 7,
};
/*
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "the marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}*/

//for in loop
/*
for (let x in marks) {
  console.log(" the marks of " + x + " are  " + marks[x]);
}
  */

/*
let cn = 50;
let i;
while (i != cn) {
  i = prompt("enter number ");
  console.log("try again");
}
console.log("you entered a correct number");
*/

//problem no 5:
//write a function to find a mean of 5 numbers.

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(1, 2, 3, 4));
