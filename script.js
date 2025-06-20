let compun = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

const input = document.getElementById('userInput');
const feedback = document.getElementById('feedback');
const attemptsInfo = document.getElementById('attemptsInfo');
const restartBtn = document.getElementById('restartBtn');
const submitBtn = document.getElementById('submitBtn');

function guessNumber() {
  let usern = Number(input.value);

  if (!usern || usern < 1 || usern > 100) {
    feedback.textContent = '❗ Enter a valid number between 1 and 100.';
    return;
  }

  if (usern !== compun && attempts < maxAttempts - 1) {
    attempts++;

    if (usern < compun) {
      feedback.textContent = `Too low! Attempts left: ${maxAttempts - attempts}`;
    } else {
      feedback.textContent = `Too high! Attempts left: ${maxAttempts - attempts}`;
    }

    input.value = '';
    input.focus();
  } else {
    if (usern === compun) {
      feedback.textContent = `🎉 Congratulations! You guessed it right in ${attempts + 1} attempts.`;
    } else {
      feedback.textContent = `❌ Game Over! The correct number was ${compun}.`;
    }
    endGame();
  }
}

function endGame() {
  input.disabled = true;
  submitBtn.disabled = true;
  restartBtn.style.display = 'inline-block';
}

function restartGame() {
  compun = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  input.disabled = false;
  submitBtn.disabled = false;
  input.value = '';
  feedback.textContent = '';
  attemptsInfo.textContent = '';
  restartBtn.style.display = 'none';
}
