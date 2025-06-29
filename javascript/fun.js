// js
// CopyEdit
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5// With multiple linesconst 
// greet = (name) => {
//   console.log(`Hello, ${name}`);
// };
// greet("Alice"); // Output: Hello, Alice

// function greet() {
//   console.log("Hello!");
// }
// greet();

/* Arrow Function */
// const greet = () => {
//     console.log("bye")
// }
// greet();

/* Parameters vs Arguments */
// function multiply(x, y) { // x, y are parameters
// return x * y;
// }
// console.log(multiply(2, 3));

/* Default Parameters */
// function greet(name = "Guest") {
//   console.log(`Hello, ${name}`);
// }
// greet();

// /* Rest parameters (...args arguments) */
// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3,4,5)); // Output: 6

/* spread parameters (... explands array) */
// const nums = [1, 2,4,5,6, 3];
// console.log(Math.max(...nums)); // Output: 3


/* Scope (global, function, block) */
// let globalVar = "I am global";

// function testScope() {
//   let functionVar = "I am in a function";

//   if (true) {
//     let blockVar = "I am block scoped";
//     console.log(blockVar); // Works
//     console.log(functionVar)
//     console.log(globalVar)
//   }

//   // console.log(blockVar); 
//   console.log(functionVar); // Works
//   console.log(globalVar)
// }
// console.log(testScope())
// console.log(globalVar)
// console.log(blockVar)
// console.log(functionVar)

// console.log(hoisted); // undefined (hoisted but not initialized)
// var hoisted = "I'm hoisted";

// Function hoistingsayHi(); // Output: Hi!
function sayHi() {
  console.log("Hi!");
}

// const user = {
//   name: "Bob",
//   age: 30,
//   location: "NYC",
// };

// const { name, age } = user;
// console.log(name); // Output: Bobconsole.log(age);  // Output: 30


// const nums = [1, 2, 3];
// const doubled = nums.map(num => num * 2);
// console.log(doubled); // [2, 4, 6]
