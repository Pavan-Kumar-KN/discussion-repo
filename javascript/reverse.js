function reverseNumber() {
    const num = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(num)) {
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }

    const reversed = reverseDigits(num);
    resultDiv.textContent = `Reversed Number: ${reversed}`;
  }

  function reverseDigits(n) {
    let reversed = 0;
    let sign = Math.sign(n);
    n = Math.abs(n);

    while (n > 0) {
      reversed = reversed * 10 + (n % 10);
      n = Math.floor(n / 10);
    }

    return reversed * sign;
  }
