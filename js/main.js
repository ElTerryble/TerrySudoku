// main.js
import { startTimer, resetTimer } from './timer.js';
import { increaseScore, decreaseScore, resetScore } from './score.js';

document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('sudoku-board');
    const newGameButton = document.getElementById('new-game');
    const timerElement = document.getElementById('time');
    let timer;
    let score = 0;

    // Function to create the board
    function createBoard() {
        boardElement.innerHTML = '';
        for (let i = 0; i < 81; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.maxLength = 1;
            input.classList.add('cell');
            boardElement.appendChild(input);

                        // Event listener to handle input validation
            input.addEventListener('input', (e) => {
                validateInput(e.target);
            });
        }
    }

        // Function to validate input
    function validateInput(inputElement) {
        const correctValue = getCorrectValueForCell(inputElement); // Placeholder for actual Sudoku logic
        if (inputElement.value == correctValue) {
            increaseScore();
        } else {
            decreaseScore();
        }
    }
    
    // Function to start a new game
    function startNewGame() {
        createBoard();
        resetTimer(timerElement);
        timer = startTimer(timerElement);
        score = 0;
        document.getElementById('score').textContent = score;
        // Add code here to generate and populate the Sudoku board
        function generatePuzzle() {
    const puzzle = sudoku.generate("easy"); // Difficulty can be 'easy', 'medium', 'hard', 'very-hard'
    return puzzle.split(''); // Splits the string into an array for easy access
}

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

    }

    newGameButton.addEventListener('click', startNewGame);

    // Initialize the game
    startNewGame();
});

