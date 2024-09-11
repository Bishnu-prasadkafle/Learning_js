/*
//1. create an array of numbers and take input from the users to add numbers to this array.
let arr = [1, 2, 3, 4, 5];
let a = prompt("enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

//2.
// keep adding numbers to the array in 1 until 0 is added to the array
let arr2 = [4, 5, 5, 5, 3, 2, 12, 1, 4565, 67];
do {
  a = prompt("enter a valid number ");
  a = Number.parseInt(a);
  arr2.push(a);
} while (a != 0);
console.log(arr2);
*/
//3.
// Filters for numbers divisible by the form a given array
let arr3 = [1, 3, 2, 5, 6, 70, 7];
let f = arr3.filter((f) => {
  return f % 10 == 0;
});
console.log(f);

//4. Create an array of Square of given numbers
let arr4 = [1, 4, 77, 66, 55, 44, 3223];
let a = arr4.map((a) => {
  return a * a;
});
console.log(a);

//5.Use reduce to calculate factorial of a given number form an array of first n natural numbers ( n being the number whose factorial needs to be calculated)
let arr5 = [1, 2, 3, 4, 5];
let b = arr5.reduce((a1, a2) => {
  return a1 * a2;
});
console.log(b);
