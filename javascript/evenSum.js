function calculateEvenSum() {
    const num = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(num)) {
      resultDiv.textContent = 'Please enter a valid number.';
      return;
    }

    const sum = sumEvenDigits(num);
    resultDiv.textContent = `Sum of even digits: ${sum}`;
    console.log(sum)
  }

  function sumEvenDigits(n) {
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      if (digit % 2 === 0) sum += digit;
      n = Math.floor(n / 10);
    }
    return sum;
  }
