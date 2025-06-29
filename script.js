// // DOM Event Handling (commented out)
// // const element = document.getElementById("temp2");
// // element.addEventListener("click", function () {
// //   alert("Hello, World!");
// // });

// // console.log("Hello , world");

// // // Variable Declarations - Different Types
// // var var1 = "hello"; // Function-scoped, can be redeclared, hoisted
// // let var2 = "world"; // Block-scoped, cannot be redeclared in same scope
// // const var3 = "hello world"; // Block-scoped, cannot be reassigned or redeclared

// // // Block Scope Demonstration
// // {
// //   let var4 = "hello world 4"; // Only exists within this block
// //   console.log(var4); // ✅ Works - var4 is accessible here
// // }

// // console.log(var4); // ❌ ReferenceError - var4 is not defined outside its block

// // data types in javascript
// let string = "hello world"; // String

// let number = 42; // Number
// let boolean = true; // Boolean

// let object = { key: "value" }; // Object

// var str2 = "hello world" + 3; // String

// console.log(str2);

// // == ===
// if (2 == "2") {
//   console.log("2 is equal to '2' using ==");
// } else {
//   console.log("2 is not equal to '2' using ==");
// }

// if (2 === "2") {
//   console.log("2 is equal to '2' using ==");
// } else {
//   console.log("2 is not equal to '2' using ==");
// }

// // * Loops

// //

// function fun1() {
//   return "hellow world";
// }

// const fun2 = function () {
//   return "hello world";
// };

// // Arrow Function
// const fun23 = (a = 10, b, c) => {
//   return a + b;
// };


// const spreadFunction = (...args) => {
//   console.log(args);
// }

// // Example usage of the spread function
// spreadFunction(1, 2, 3, 4, 5); // Outputs: [1, 2, 3, 4, 5]


// // advanced js 
// console.log("********************** advanced js **********************");

// const student = {
//   name: "Pallavi Mam",
//   class: "MCA",
//   age: 30,
//   subjects: ["Math", "Science", "English"],
//   failedSubjects: ["Math", "English"],
// };


// console.log(student.name + student.age);

// student.failedSubjects.forEach((subject) => {
//   console.log("Failed Subject: " + subject);
// });

// student.subjects.forEach((subject) => {
//   console.log("Subject: " + subject);
// });

// // for (let i = 0; i< student.subjects.length; i++) {
// //   console.log("Subject: " + student.subjects[i]);
// // }

// student.subjects.map((subject) => {
//   console.log("Mapped Subject: " + subject);
// })

// // Array of objects example 
// console.log("********************** Array of Objects **********************");

// const company = {
//   name: "TechCorp",
//   employees: [
//     { name: "Alice", role: "Dev" },
//     { name: "Bob", role: "Designer" },
//   ],
// };

// // company.employees.forEach((employee) =>{
// //   console.log("Employee Name: " + employee.name + "Role: " + employee.role);
// // });

// for (let i = 0; i < company.employees.length; i++) {
//   console.log("Employee Name: " + company.employees[i].name + " Role: " + company.employees[i].role);
// }


// console.log("********************** DOM Manipulation **********************");

// var element = document.getElementById("temp2");

// var classElement = document.getElementsByClassName("temp");

// var querySelectorElement = document.querySelector(".temp");


// querySelectorElement.innerHTML = "<div class = colordiv>New Content</div>";


// querySelectorElement.style.color = "red";

// querySelectorElement.addEventListener("click", () => (
//   querySelectorElement.remove()
//   // console.log("Element removed");
// ));


// Callback function 
const getData = (callback, callback2) => {
  console.log("Fetching data from server...");
  // setTimeout(() => {
  //   console.log("Data fetched from server");
  //   // Calling the callback function (normal function)
  //   callback();
  //   callback2();
  // }, 5000);

  const response = fetch("https://catfact.ninja/fact");
  console.log("The response is ", response);


  setTimeout(() => {
    console.log("Fetched data from the server" , response);
  }, 5000);
}

getData(() => {
  console.log("Callback function executed after data fetch");
}, () => {
  console.log("Callback 2 function ")
});


console.log("The call back function is executed after the data is fetched from the server");


console.log("********************** Callback Function **********************");


// call back function drawback




// output 

// fetching data from server...
//  the call back function is executed after the data is fetched from the server
// calll back function 

// data fetched from server
// callback function executed after data fetch
// callback 2 function

// ? Promises 

