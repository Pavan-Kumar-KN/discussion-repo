function checkNumber() {
    const num = parseFloat(document.getElementById('num').value);
    let resultText = '';

    if (isNaN(num)) {
      resultText = 'Please enter a valid number.';
      console.log(num)
    } else if (num > 0) {
      resultText = 'The number is positive.';
      console.log(num)
    } else if (num < 0) {
      resultText = 'The number is negative.';
      console.log(num)
    } else {
      resultText = 'The number is zero.';
      console.log(num)
    }

    document.getElementById('result').innerText = resultText;
  }
