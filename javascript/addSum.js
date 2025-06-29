
let element = document.getElementById("pp")
// let numbers = " "
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  element.innerHTML = sum
}
console.log(sum)