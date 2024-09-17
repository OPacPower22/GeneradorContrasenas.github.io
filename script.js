// Elementos DOM
const passwordField = document.getElementById('password');
const lengthInput = document.getElementById('length');
const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById('include-uppercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const strengthIndicator = document.getElementById('strength-value');

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
    evaluateStrength(password);
}

// Copiar contraseña al portapapeles
copyBtn.addEventListener('click', () => {
    passwordField.select();
    document.execCommand('copy');
    alert('Contraseña copiada al portapapeles');
});

// Evaluar la fuerza de la contraseña
function evaluateStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    if (strength <= 2) {
        strengthIndicator.textContent = 'Débil';
        strengthIndicator.style.color = 'red';
    } else if (strength === 3 || strength === 4) {
        strengthIndicator.textContent = 'Media';
        strengthIndicator.style.color = 'orange';
    } else {
        strengthIndicator.textContent = 'Fuerte';
        strengthIndicator.style.color = 'green';
    }
}

// Limpiar la ventana
clearBtn.addEventListener('click', () => {
    passwordField.value = '';
    strengthIndicator.textContent = '';
});

// Generar nueva contraseña al hacer clic en el botón
generateBtn.addEventListener('click', generatePassword);
