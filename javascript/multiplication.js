function generateTable() {
    const num = parseInt(document.getElementById('number').value);
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // Clear previous table

    if (isNaN(num) || num < 1) {
      container.innerHTML = '<p>Please enter a valid number greater than 0.</p>';
      return;
    }

    let tableHTML = `<h2>Multiplication Table for ${num}</h2><table>`;
    for (let i = 1; i <= 10; i++) {
      tableHTML += `<tr><td>${num} × ${i} = </td><td>${num * i}</td></tr>`;
    }
    tableHTML += '</table>';
      container.innerHTML = tableHTML;
}
