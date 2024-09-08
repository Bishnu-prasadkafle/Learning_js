//Arryas Method
//join method
let num = [1, 2, 3, 4, 5, 34];
let b = num.toString(); //b is now a string\
console.log(b);
console.log(typeof b);
let c = num.join(" and ");
console.log(c);
console.log(typeof num);

//pop method removers last element from the array
num.pop();
console.log(num);
/*
let r = num.pop();
console.log(num, r);*/

//push method returns the new arrya length
//let r = num.push(77);
//console.log(num.r);

//shift method remove from the first elements
let r = num.shift();
console.log(r, num); // Removes an elements from the start of th e array

let k = num.unshift(78); //returns new array length.
console.log(r, num);
