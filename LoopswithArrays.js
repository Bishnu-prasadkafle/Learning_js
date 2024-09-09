//looping through arrays
/*arrays can be looped through using the classical javascript
 for loop or through some other methods */

//forEach loop = calls a function, once for each array element

/*let bip = [1, 2, 3, 4, 5];
for (let i = 0; i < bip.length; i++) {
  console.log(bip[i]);
}
*/
// ForEach loop
let bip = [1, 2, 3, 4, 5, 6];
bip.forEach((element) => {
  console.log(element * element);
});

//Array form = used to create an array to get the values from an array.
let name = "bipin";
let arr = Array.from(name);
console.log(arr);

//for of loop
let pin = [1, 3, 5, 7, 9];
for (let i of pin) {
  console.log(i);
}
