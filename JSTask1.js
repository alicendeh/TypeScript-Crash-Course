const body = document.querySelector(".body");
const btn = document.querySelector(".btn");
const txt = document.querySelector(".txt");
// body.style.background = "red";
const colorArray = Array(
  "aliceblue",
  "indigo",
  "red",
  "blue",
  "orange",
  "teal",
  "black"
);
txt.style.fontSize = "35px";
// console.log(colorArray);
let inc = 0;

btn.addEventListener("click", () => {
  if (inc < colorArray.length) {
    body.style.background = colorArray[inc];
    txt.innerHTML = getComputedStyle(body).background;
    txt.style.color = "white";
    txt.innerHTML = txt.innerHTML.split("none")[0];

    inc++;
  } else {
    inc = 0;
  }
});
