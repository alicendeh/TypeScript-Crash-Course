//--------reverse string  ---------

// function reverseString(str) {
//   str = str.split("").reverse().join("");
//   return str;
// }

// reverseString("hello");

//--------factorial ---------
// function factorialize(num) {
//   let res = num;
//   if (num > 0) {
//     while (num != 1) {
//       res *= num - 1;
//       num--;
//     }
//     return res;
//   } else if (num === 0) {
//     return 1;
//   } else {
//     return `such a number aint gat factorial`;
//   }
// }

// factorialize(0);

//--------longest word  ---------
// function findLongestWordLength(str) {
//   let arr = str.split(" ");
//   let maxLength = str[0].length;
//   arr.forEach((elem) => {
//     if (elem.length > maxLength) {
//       maxLength = elem.length;
//     }
//   });
//   return maxLength;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//--------largest of four  ---------

// function largestOfFour(arr) {
//   let largest = 0;
//   let newArray = [];

//   arr.forEach((elem) => {
//     elem.forEach((ind) => {
//       if (ind > largest) {
//         largest = ind;
//       }
//       console.log(largest);
//     });

//     newArray.push(largest);
//     largest = 0;
//   });
//   return newArray;
// }

// largestOfFour([
//   [17, 23, 25, 12],
//   [25, 7, 34, 48],
//   [4, -10, 18, 21],
//   [-72, -3, -17, -10],
// ]);

//--------confirm ending ---------

// function confirmEnding(str, target) {
//   let arr = str.split(" ");
//   let lastElem = arr[arr.length - 1];
//   let diff = lastElem.length - target.length;
//   let lastElemSlice = lastElem.slice(diff);
//   return lastElemSlice === target;
// }

// console.log(
//   confirmEnding(
//     "Walking on water and developing software from a specification are easy if both are frozen",
//     "specification"
//   )
// );

//--------Repeat a String Repeat a String ---------

// function repeatStringNumTimes(str, num) {
//   let newString = "";
//   if (num > 0) {
//     for (let i = 0; i < num; i++) {
//       newString += str;
//     }
//     return newString;
//   } else {
//     return "";
//   }
// }

// repeatStringNumTimes("abc", -2);

//-------- Truncate a String---------

// function truncateString(str, num) {
//   let newStr = str.slice(0, num);
//   if (str.length > num) {
//     let ans = newStr + "....";
//     console.log(ans);
//   } else {
//     console.log(newStr);
//   }
// }
// truncateString("Peter Piper picked a peck of pickled peppers", 11);

//-------- Truncate a String---------

function titleCase(str) {
  let newS = str.split(" ");
  let count = 1;

  console.log(newS[count++]);
}

titleCase("I'm a little tea pot");
