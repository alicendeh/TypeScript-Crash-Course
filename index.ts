//objects

// const fet: {
//   name: string;
//   street: number;
//   junction: string;
//   good: boolean;
// } = {
//   name: "FET",
//   street: 8,
// };
// console.log(fet.name);

//Arrays
// const person = {
//   name: "Alice",
//   hobbies: [2, 4],
//   affin: ["yaya", 1, "alice", 2, false], //tupples
// };

// let trial;
// trial = person.affin.push(9);

// console.log(person.affin);

//ENUMS
enum Pos {
  FRONTEND = "Yaya",
  BACKEND = "Alice",
  FULLSTACK = 0,
  DEVOPS,
}
let devSet = {
  role: Pos.BACKEND,
};

console.log(devSet.role);
