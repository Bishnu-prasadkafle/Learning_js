//delete method
let bip = [1, 2, 3, 4, 5, 6, 7, 87];
delete bip[0];
console.log(bip);
console.log(bip.length);

//concat method //returns new array
let pin = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pin1 = [11, 22, 33, 44, 55, 66];
let pin2 = [111, 222, 333, 444, 55, 5, 5555];
let newArray = pin.concat(pin1, pin2);
console.log(newArray);
console.log(pin, pin1, pin2);

//sort method = used to sort an array alphabetically
let ram = [22, 333, 444, 555, 666, 777];
ram.sort();
console.log(ram);

/* 
sort() takes AN OPTIONAL COMPARE FUNCTIONS.
 IF THIS FUNCTION IS PROVIDED AS THE FIRST ARGUMENTS THE SORT 
 () FUNCTIONS WILL CONSIDER THESE VALUES 
 (THE VALUES RETURNED FROM THE COMPARE FUNCTION) AS TH BASIS OF SORTING.
 */

let compare = (a, b) => {
  return b - a;
};
let shyam = [11, 222, 333, 444, 555, 666, 777];
shyam.sort(compare);
console.log(shyam);
shyam.reverse();

//splice and slice method
//splice can be used to add new items to an array.
//slice can be used to out a piece from an arrray. It creates new array.
let mol = [998, 7756, 5555, 444, 333, , 2];
mol.splice(2, 3, 21, 22, 33);
console.log(mol);

//slice method
let lol = [11, 22, 33, 44, 55, 656];
let newlol = lol.slice(3, 5);
console.log(newlol);
