// main.js
import { startTimer, resetTimer } from './timer.js';

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
    }

    newGameButton.addEventListener('click', startNewGame);

    // Initialize the game
    startNewGame();
});

