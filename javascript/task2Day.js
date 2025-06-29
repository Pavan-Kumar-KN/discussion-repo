// destructuring 
// swapping two numbers
console.log("***** swappig two numbers ******")
let a = 10;
let b = 20;
 [a, b]= [b ,a]
console.log(a)
console.log(b)

// swapping array elements
console.log("***** swappig array elements ******")
let c =[2, 3, 4, 5, 6 ,7];

[c[0],c[4]] = [c[4],c[0]]

console.log(c)
//  assign array elements to variables
console.log("**** assign array elements to variables *******")

let d= ["red","green", "white","yellow", "blue"];
 
let [firstcolor, secondcolor, ...rest] = d;

console.log(firstcolor);
console.log(secondcolor);
console.log(rest);
console.log(d);

// extract values from objects
console.log("***** Extract values from objects ********")
const person1 = {
    name:"pallavi",
    age:38,
    job: "AP"    
}

const person2 = {
    name:"sanavi",
    age:38,
    job: "AP"    
}
console.log(person1)  /* what is the difference between this line */
console.log(person1.name)
const{name, age,job}= person1
console.log(person1)  /* what is the difference between this line */

console.log(person2)
console.log(person2.name)
// const{name, age,job}= person2

// in function parameters
console.log("******* Function parameters ********")
function exm({name, age, job}){
    console.log(`name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`) 
}

const person3 = {
    name:"neelu",
    age:63,
    job: "business"    
}

const person4 = {
    name:"neela",
    age:64,
    job: "house made"    
}

exm(person3);

exm(person4);


// advanced js 
console.log("********************** advanced js **********************");

const student = {
  name: "Pallavi Mam",
  class: "MCA",
  age:30,
  subjects: ["Math","Science", "English"],
  failedSubjects: ["Math", "English"],
};

student.failedSubjects.forEach((subject) =>{
  console.log("Failed Subject: " + subject);
});

student.subjects.forEach((subject) => {
  console.log("Subject: " + subject);
});

// for (let i = 0; i< student.subjects.length; i++) {
//   console.log("Subject: " + student.subjects[i]);
// }

student.subjects.map((subject) =>{
  console.log("Mapped Subject: " + subject);
})
