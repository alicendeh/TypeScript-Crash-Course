console.log(findIn("fodjo frank", "f"));

function findIn(str, compa) {
  let ind = str.indexOf(compa);
  if (ind > -1) {
    let slicedVa = str.slice(ind, ind + 1);
    let val = str.length;
    let endingVal = str.padEnd(val + 1, slicedVa);
    let arrayConvert = endingVal.split("");
    arrayConvert.splice(ind, 1).join;
    let res = arrayConvert.join("");

    console.log(`the ${compa} was removed at index ${ind} \n`);
    return `your new name is ${res}`;
  } else {
    return `Oops sorry`;
  }
}

// findName("fodjo frank", "sam");

// function findName(str, comp) {
//   if (str.includes(comp)) {
//     console.log("found");
//   } else {
//     console.log("not found");
//   }
// }
