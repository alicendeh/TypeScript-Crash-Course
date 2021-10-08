// const swap = (Array1, Array2) => {
//   let temp;
//   temp = Array1;
//   Array1 = Array2;
//   Array2 = temp;

//   return Array1, Array2;
// };

// const getIntersect = (Array1, Array2, Array3) => {
//   let newArry1 = Array();
//   let finalArray = Array();

//   if (Array3 && Array2) {
//     Array1.forEach(
//       (elem) =>
//         !Array2.includes(elem) &&
//         !newArry1.includes(elem) &&
//         newArry1.push(elem)
//     );
//     Array2.forEach(
//       (elem) =>
//         !Array1.includes(elem) &&
//         !newArry1.includes(elem) &&
//         newArry1.push(elem)
//     );

//     newArry1.forEach((elem) => {
//       !Array3.includes(elem) &&
//         !finalArray.includes(elem) &&
//         !finalArray.push(elem);
//     });
//     Array3.forEach((elem) => {
//       !newArry1.includes(elem) &&
//         !finalArray.includes(elem) &&
//         !finalArray.push(elem);
//     });

//     return finalArray;
//   } else if (Array2) {
//     Array1.forEach(
//       (elem) =>
//         !Array2.includes(elem) &&
//         !newArry1.includes(elem) &&
//         newArry1.push(elem)
//     );
//     Array2.forEach(
//       (elem) =>
//         !Array1.includes(elem) &&
//         !newArry1.includes(elem) &&
//         newArry1.push(elem)
//     );

//     return newArry1;
//   } else {
//     return Array1;
//   }
// };

// console.log(getIntersect(Array(1, 1, 2, 5), Array(2, 2, 3, 5), [3, 4, 5, 5]));

const invent = (curInv, newInv) => {
  curInv.forEach((elem, index) => {
    newInv.forEach((ele) => {
      console.log(elem[1] === ele[1] && "true");
    });
    // console.log(newInv[index]);
    // newInv[index].includes(elem[1]) && console.log(elem);
  });
};

invent(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
    0,
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);

// inventory.flat().includes("Dirty Sock") ? console.log("here") : null;

// console.log(inventory.flat().i);
