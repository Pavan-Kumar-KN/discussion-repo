
  function calculateFactorial() {
    const num = parseInt(document.getElementById('num').value);
    let result = 1;

    if (num < 0) {
      document.getElementById('result').innerText = 'Factorial is not defined for negative numbers.';
      return;
    }

    for (let i = 1; i <= num; i++) {
      result *= i;
      console.log(i)
    }

    document.getElementById('result').innerText = `Factorial of ${num} is ${result}`;
  }