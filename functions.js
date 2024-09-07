let a = 2;
let b = 3;
let c = 4;
function oneplusAvg(x, y) {
  console.log("done");
  return 1 + (x + y) / 2;
}

console.log("The one plus average sum of a and b", oneplusAvg(a, b));

console.log("The one plus average sum of c and b", oneplusAvg(b, c));

console.log("The one plus average sum of a and c", oneplusAvg(a, c));

/*
const sum = (p, q) => {
  return p + q;
};
console.log(sum(10, 10));
*/

const hello = (d, f) => {
  return d * f;
};
console.log(hello(2, 2));

const bipin = () => {
  console.log(
    "Hey i am junior front end developer, and i am in the process of senior developer"
  );
  return "hi";
};

bipin();
let v = bipin();
console.log(v);
