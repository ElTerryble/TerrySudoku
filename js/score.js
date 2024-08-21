// score.js
let score = 0;

// Function to increase score based on correct input
export function increaseScore() {
    score += 10; // Increase score by 10 points for each correct entry
    updateScoreDisplay();
}

// Function to decrease score based on incorrect input
export function decreaseScore() {
    score -= 5; // Decrease score by 5 points for each incorrect entry
    if (score < 0) score = 0; // Ensure the score doesn't go below 0
    updateScoreDisplay();
}

// Function to reset the score
export function resetScore() {
    score = 0;
    updateScoreDisplay();
}

// Function to update the score display
function updateScoreDisplay() {
    document.getElementById('score').textContent = score;
}

