//write a program using prompt function to take input of age a vlaue fromthe users and use alert to tell him if he can drive
let age = prompt("Enter your age");
age = Number.parseInt(age);
const willDrive = (age) => {
  return age >= 18 ? true : false;
};
if (willDrive(age)) {
  alert("yes you can drive");
} else alert("you cannot drive");
//2
let year = prompt("enter you DOb");
year = Number.parseInt(year);
const willVote = (year) => {
  return year >= 18;
};
if (willVote(year)) {
  alert("you can vote");
} else alert("you cannot vote");

//In Q1 use co

let runAgain = true;
const canDrink = (age) => {
  return age >= 18;
};
while (runAgain) {
  let age = prompt("Enter your age ");
  age = Number.parseInt(age);
  if (age < 0) {
    console.error("please enter a valid age");
    break;
  }

  if (canDrink(age)) {
    alert("yes you can knock like alex kandel ");
  } else {
    alert("You cannot drink Your are gentleman like bipinkafle ");
  }
  runAgain = confirm("do you want to Knock again like alex");
}

let number = prompt(" enter a number");
number = Number.parseInt(number);
//write a program to change the url to facebook.com (Redirection) if users enters a number graeater than 4.
if (number > 4) {
  location.href = "https://facebook.com";
}
//change the background of thew page to yellow red or any other color bsaed on users input through prompt.
let color = prompt("Enter the bg color");
document.body.style.background = color;
