console.log("Welcome")

// first try
let element = document.getElementById("pp")
let numbers = ""
for (let i = 1; i <= 10; i++) {
  // element.innerHTML(i)
  numbers += i + "<br>"
  // element.innerHTML = i;
  element.innerHTML = numbers
  console.log(i)
}


// second try
// const listElement = document.getElementById('pp')
//     for (let i = 1; i <= 10; i++) {
//       const listItem = document.createElement('li')
//       listItem.textContent = i;
//       listElement.appendChild(listItem);
//       console.log(i)
//     }

// third try

// let numbers = "";
//     for (let i = 1; i <= 10; i++) {
//       numbers += i + "<br>";
//       console.log(i)
//     }
//     document.getElementById("pp").innerHTML = numbers;