//Map = it creates a new array by performing same operation on each array element.
//array map method
let arr = [45, 45, 66];
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + index + 1;
});
console.log(a);

//filter method
//filters an array with values that passes a test. creates a new array
let arr2 = [33, 22, 55, 76, 4, 56];
let a2 = arr2.filter((a) => {
  return a > 10;
});
console.log(a2, arr2);

//Reduce Method
//reduce an array to a single value
arr3 = [1, 2, 3, 4, 5, 6, 7];
let b = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log(b);
