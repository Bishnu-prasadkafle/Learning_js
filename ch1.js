//chapter 1 1.Create a variables of type string and try to add a number to it.
let a = "Bipin";
let b = 6;
console.log(a + b);

//chapter 1  2.Use type of operator to find the datatype of the string in last question.
console.log(typeof (a + b));

//chapter 1 3.3.	Create a const object in JavaScript can you change it to hold a number later?
const a1 = {
  name: "Bipin",
  section: 1,
  isPrinciples: false,
};
//chapter 1 4.4.	Try to add a new key to the const object in problem 3 were you able to do it?
a1["friend"] = "Bipin";
a1["name"] = "Bishnu";
console.log(a1);

// chapter 1 5.Write a Js program to create a word- meaning dictionary of 5 words.
const dict = {
  appreciate: "recognize the full of worth",
  ataraixa: " a state of freedom from emotional distrubance and anxiety",
  yakka: "work especially hard work.",
};
console.log(dict.yakka);
