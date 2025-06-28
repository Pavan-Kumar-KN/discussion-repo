// const user = {
//     name: "Pal", 
//     age: 38, 
//     location: "TMK"
// };

// const {location} = user
// console.log(user)
console.log("Multiplication of the given array using for loop")
const arry = [2, 4, 6, 8]
let arry1 = []
for (var i = 0; i < arry.length; i++) {
    // arry1[i] = arry[i] * 2
    // console.log(arry1[i])
arry1.push(arry[i]*2)
}
console.log(arry1)

// multiplication of the array using map method

const aa=[1,2,3,4,5,6]
const op = aa.map(ele=>ele*2);
console.log(op)

const num = [2, 4, 6, 8]
const num1 = num.map((ele) => ele * 2)
console.log(num1)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = 0;
let num3 = 0;
for (let i = 0; i < numbers.length; i++) {
    (numbers[i] % 2 == 0)? num2 ++ : num3 ++
}
console.log("Even numbers" + num2)
console.log("Odd numbers" + num3)

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arry3 = numbers1.filter((ele) => ele % 2 == 0)
console.log("Even numbers are" + arry3)
const arry4 = numbers1.filter((ele) => ele % 2 != 0)
console.log("Odd numbers are" + arry4)


// const company = {
//     name: "TechCorp",
//     employees: [
//         { name: "Alice", role: "Dev" },
//         { name: "Bob", role: "Designer" },
//     ],
// };

// console.log(company.employees[0].name); // Alice

// company.employees.forEach(ele => {
//     console.log(ele)
// })

// Sum of array elements using traditional methods
const arr = [2,2,4,5,6]
let arr1 = 0;
for(let i=0;i<arr.length;i++)
{
    arr1 = arr[i] + arr1; 
}
console.log(arr1)

// sum of array elements using js predefined method
const ar = [2,2,4,5,6]
let ar1 = ar.reduce((a,c)=>a+c, 0)
console.log(ar1)