function checkPrime() {
    const num = parseInt(document.getElementById('number').value);
    const resultDiv = document.getElementById('result');
    
    if (isNaN(num) || num < 2) {
      resultDiv.textContent = 'Please enter a number greater than 1.';
      return;
    }

    resultDiv.textContent = isPrime(num) ? `${num} is a prime number.` : `${num} is not a prime number.`;
  }

  function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // other even numbers are not prime

    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
