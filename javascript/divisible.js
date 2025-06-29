function countDivisibleNumbers() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      if (i % 15 === 0) { // Numbers divisible by both 3 and 5
        count++;
      }
    }
    document.getElementById('result').innerText = `There are ${count} numbers between 1 and 100 divisible by both 3 and 5.`;
  }
