
 let element = document.getElementById("pp")
let numbers = ""
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
    numbers += i + "<br>"
    element.innerHTML= numbers

  }
  