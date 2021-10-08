let dispName = document.querySelector(".dispName");
let back = document.querySelector(".back");
let front = document.querySelector(".front");

let arr = ["yaya", "desmond", "alice", "yifoue", "garin", "simplice", "atem"];

// dispName.innerHTML = arr[0];

let count = 0;

front.addEventListener("click", () => {
  if (count < arr.length) {
    console.log("count before ", count);

    dispName.innerHTML = arr[count];
    console.log("count after ", count);

    count++;
  } else {
    count = 0;
  }
});

back.addEventListener("click", () => {
  console.log("count2 before ", count);

  console.log(count);
  if (count < arr.length || count > 1) {
    --count;
    dispName.innerHTML = arr[count];
    console.log("count2 afrer ", count);
  } else {
    count = 0;
  }
  console.log(arr[count]);
});
