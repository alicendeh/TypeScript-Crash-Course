// // console.log(findIn("fodjo frank", "f"));

// // function findIn(str, compa) {
// //   let ind = str.indexOf(compa);
// //   if (ind > -1) {
// //     let slicedVa = str.slice(ind, ind + 1);
// //     let val = str.length;
// //     let endingVal = str.padEnd(val + 1, slicedVa);
// //     let arrayConvert = endingVal.split("");
// //     arrayConvert.splice(ind, 1).join;
// //     let res = arrayConvert.join("");

// //     console.log(`the ${compa} was removed at index ${ind} \n`);
// //     return `your new name is ${res}`;
// //   } else {
// //     return `Oops sorry`;
// //   }
// // }

// // findName("fodjo frank", "f");

// // function findName(str, comp) {
// //   if (str.includes(comp)) {
// //     console.log("found");
// //   } else {
// //     console.log("not found");
// //   }
// // }

// let str = "You do not know what you do not know until you know.";
// let substr = "know";

// let count = 0;

// let index = str.indexOf(substr);
// console.log(index);
// while (index !== -1) {
//   count++;
//   index = str.indexOf(substr, index + 1);
// }

// console.log(count);

// console.log("Alice".slice(0, 1));

// "use strict";
// var username = "yaya";
// username = username.split("");

// var res = "";

// for (let i = username.length - 1; i >= 0; i--) {
//   res += username[i];
// }

// console.log(res);

// let arr = [1, 2, 3, "a", "s"];
// let newArr = Array();
// arr.forEach((s) => {
//   if (typeof s !== "number") {
//     newArr.push(s);
//   }
//   console.log(newArr);
// });

function forecast(arr) {
  // Only change code below this line
  console.log(arr.slice(2));
  return arr;
}

// Only change code above this line
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// let arr = ["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"];

// console.log(arr.slice(2, 4));
