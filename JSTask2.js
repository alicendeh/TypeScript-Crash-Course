let inc = document.querySelector(".inc");
let reset = document.querySelector(".reset");
let decr = document.querySelector(".decr");
let num = document.querySelector(".num");

let count = 0;

num.innerHTML = count;

inc.addEventListener("click", () => {
  num.innerHTML = ++count;
  console.log(count);
});

decr.addEventListener("click", () => {
  num.innerHTML = --count;
  console.log(count);
});

reset.addEventListener("click", () => {
  count = 0;
  num.innerHTML = 0;
});
