const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("First child is b: ", b.firstChild);
console.log("First Element child of b is :", b.firstElementChild);
