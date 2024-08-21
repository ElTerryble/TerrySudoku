// timer.js
export function startTimer(displayElement) {
    let startTime = Date.now();

    return setInterval(() => {
        let elapsedTime = Date.now() - startTime;
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);

        displayElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

export function resetTimer(displayElement) {
    clearInterval(timer);
    displayElement.textContent = '00:00';
}

