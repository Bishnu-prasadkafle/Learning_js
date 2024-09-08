//what will be the following print in js
//console.log("bip\"".length)
let name = 'Bip"in';
console.log(name.length);

//explore the includes, starts with and ends with functions of a string?
const sentence = "the quick brown fox jumb over the lazy dog.";
const word = "fox";
console.log;
console.log(sentence.includes(word));
`the word "${word}" ${
  sentence.includes(word) ? "is" : "is not"
} in the sentcence `;

// write a program to convert a given string to lowercase
let book = "MUNAMADHAN";
console.log(book.toLowerCase());

//extract the amount out of this string "please give RS 1000"
let str2 = "Please give Rs 1000";
let amount = str2.slice("Please give RS".length);
console.log(amount);
console.log(typeof amount);

//lets try to change fourth character of a given string were you able to do it ?
let dost = "alex";
dost[2] = "r"; //dost is not changed, because string is a immutable.
console.log(dost);
