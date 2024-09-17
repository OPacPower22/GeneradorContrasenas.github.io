// Elementos DOM
const passwordField = document.getElementById('password');
const lengthInput = document.getElementById('length');
const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

// Caracteres disponibles
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Función para generar la contraseña
function generatePassword() {
    const length = parseInt(lengthInput.value);
    let availableChars = '';
    let password = '';

    if (includeLowercase.checked) availableChars += lowercaseChars;
    if (includeUppercase.checked) availableChars += uppercaseChars;
    if (includeNumbers.checked) availableChars += numberChars;
    if (includeSymbols.checked) availableChars += symbolChars;

    if (availableChars === '') {
        alert('Por favor, selecciona al menos una opción.');
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordField.value = password;
}

// Copiar contraseña al portapapeles
copyBtn.addEventListener('click', () => {
    passwordField.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles');
});

// Generar nueva contraseña al hacer clic en el botón
generateBtn.addEventListener('click', generatePassword);
