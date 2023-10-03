// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

let attempts = 0;

guessButton.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Por favor, insira um número válido entre 1 e 100.';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Você acertou em ${attempts} tentativa(s)! O número era ${randomNumber}.`;
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Chute muito baixo. Tente novamente.';
    } else {
        message.textContent = 'Chute muito alto. Tente novamente.';
    }

    guessInput.value = '';
    guessInput.focus();
}
