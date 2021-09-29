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
var Pos;
(function (Pos) {
    Pos["FRONTEND"] = "Yaya";
    Pos["BACKEND"] = "Alice";
    Pos[Pos["FULLSTACK"] = 0] = "FULLSTACK";
    Pos[Pos["DEVOPS"] = 1] = "DEVOPS";
})(Pos || (Pos = {}));
var devSet = {
    role: Pos.BACKEND
};
console.log(devSet.role);
