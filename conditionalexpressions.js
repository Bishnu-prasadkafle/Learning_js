let a = 20;
if (a < 0) console.log("This is an invalid age");
else if (a < 9) {
  console.log("you are a kid you cant drink");
} else if (a < 18 && a >= 9) {
  console.log("you are a kid and you can think of drinking after 18");
} else {
  console.log("you can now drink as you are above 18");
}
