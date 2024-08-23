import { startTimer, resetTimer } from './timer.js';
import { increaseScore, decreaseScore, resetScore } from './score.js';

// Function to generate a Sudoku puzzle
function generatePuzzle() {
    const puzzle = sudoku.generate("easy"); // Difficulty can be 'easy', 'medium', 'hard', 'very-hard'
    return puzzle.split(''); // Splits the string into an array for easy access
}

// Function to populate the Sudoku board
function populateBoard(puzzle) {
    const inputs = document.querySelectorAll('.cell');
    inputs.forEach((input, index) => {
        if (puzzle[index] !== '.') {
            input.value = puzzle[index];
            input.disabled = true; // Make it read-only
        } else {
            input.value = '';
            input.disabled = false;
        }
    });
}

// Placeholder function to retrieve the correct value for a cell
function getCorrectValueForCell(inputElement, puzzle) {
    const index = Array.from(document.querySelectorAll('.cell')).indexOf(inputElement);
    return puzzle[index];
}

// Function to validate user input
function validateInput(inputElement, puzzle) {
    const correctValue = getCorrectValueForCell(inputElement, puzzle);
    if (inputElement.value === correctValue) {
        increaseScore();
    } else {
        decreaseScore();
    }
}

// Function to start a new game
function startNewGame() {
    const puzzle = generatePuzzle();
    populateBoard(puzzle);
    resetTimer(timerElement);
    timer = startTimer(timerElement);
    resetScore();

    // Attach event listeners to each cell to validate input
    document.querySelectorAll('.cell').forEach(input => {
        input.addEventListener('input', (e) => {
            validateInput(e.target, puzzle);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.getElementById('new-game');
    const timerElement = document.getElementById('time');
    let timer;

    newGameButton.addEventListener('click', startNewGame);

    // Start a new game when the page loads
    startNewGame();
});
