const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function palindrome(str) {
    const re = /[^A-Za-z0-9]/g;
    const strLowReg = str.toLowerCase().replace(re, '');
    const strReverse = strLowReg.split('').reverse().join('');
    return strReverse === strLowReg;
}

checkBtn.addEventListener("click", () => {
    const text = textInput.value.trim();

    if (text === "") {
        resultDiv.textContent = 'Please enter something.';
        return;
    }

    if (palindrome(text)) {
        resultDiv.textContent = `"${text}" IS a palindrome!`;
    } else {
        resultDiv.textContent = `"${text}" is NOT a palindrome!`;
    }
});