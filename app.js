const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function() {
    let selection = prompt(`Please choose ${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`we choose ${DEFAULT_USER_CHOICE} for you !`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;

}

startGameBtn.addEventListener('click', function() {
    if (gameIsRunning) {
        return ;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});

// startGame();
