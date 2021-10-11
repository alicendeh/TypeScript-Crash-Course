//-----star pattern -------
// function starPatern(n) {
//   let ans = "";
//   for (let i = 1; i <= n; i++) {
//     let dec = i;
//     ans = "";
//     while (dec > 0) {
//       ans += "*";
//       dec--;
//     }

//     console.log(ans);
//   }
// }

// starPatern(8);

//-----Hollow square pattern -------

// function hollowSquare(n) {
//   let res = "";
//   for (let i = 1; i <= n; i++) {
//     if (i === n || i === 1) {
//       for (let j = 0; j < n; j++) {
//         res += "*";
//       }
//     } else {
//       //   console.log("S");
//     }
//   }
//   console.log(res);
// }

// hollowSquare(3);

//
function perm(str) {
  let strLength = str.length;
  newStr = str.split("");
  initStr = str.split("");

  let keep = newStr;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      p = newStr[initStr.length - 1];
      newStr[initStr.length - 1] = newStr[initStr.length - 2];

      newStr[initStr.length - 2] = p;
      console.log(newStr);
    }
  }
}

perm("abc");
