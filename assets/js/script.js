function convertToDecimal() {
    const binaryInput = document.getElementById('binaryInput').value;
    const decimalResultElement = document.getElementById('decimalResult');

    if (binaryInput.match(/^[01]+$/)) {
        const decimalNumber = parseInt(binaryInput, 2);
        decimalResultElement.innerText = `Decimal: ${decimalNumber}`;
    } else {
        decimalResultElement.innerText = 'Please enter a valid binary number';
    }
}

function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResultElement = document.getElementById('binaryResult');

    if (decimalInput.match(/^\d+$/)) {
        const binaryNumber = parseInt(decimalInput, 10).toString(2).padStart(8, '0');
        binaryResultElement.innerText = `Binary: ${binaryNumber}`;
    } else {
        binaryResultElement.innerText = 'Please enter a valid decimal number';
    }
}

function refreshPage() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('decimalInput').value = '';
    document.getElementById('decimalResult').innerText = '';
    document.getElementById('binaryResult').innerText = '';
}

function showRules() {
    document.getElementById('calculator-container').style.display = 'none';
    document.getElementById('rules-container').style.display = 'block';
}

function showCalculator() {
    document.getElementById('calculator-container').style.display = 'block';
    document.getElementById('rules-container').style.display = 'none';
}

function switchTheme() {
    const body = document.body;
    if (body.classList.contains('spiderman-theme')) {
        body.classList.remove('spiderman-theme');
        body.classList.add('black-suit-theme');
    } else {
        body.classList.remove('black-suit-theme');
        body.classList.add('spiderman-theme');
    }
}
