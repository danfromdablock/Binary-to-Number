function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const resultElement = document.getElementById('result');

    if (binaryInput.match(/^[01]+$/)) {
        const decimalNumber = parseInt(binaryInput, 2);
        resultElement.innerText = `Decimal: ${decimalNumber}`;
    } else {
        resultElement.innerText = 'Please enter a valid binary number';
    }
}
