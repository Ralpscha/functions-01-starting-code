const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'The player has won';
const RESULT_COMPUTER_WINS = 'The computer has won';

let gameIsRunning = false;

const getPlayerChoice = () => {
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

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice
        ? RESULT_DRAW
        : (cChoice === ROCK && pChoice === PAPER) ||
        (cChoice === PAPER && pChoice === SCISSORS) ||
        (cChoice === SCISSORS && pChoice === ROCK)
        ? RESULT_PLAYER_WINS
        : RESULT_COMPUTER_WINS;

    // if(cChoice == pChoice) {
    //     return RESULT_DRAW;
    // } else if (
    //     cChoice === ROCK && pChoice === PAPER ||
    //     cChoice == PAPER && pChoice == SCISSORS ||
    //     cChoice === SCISSORS && pChoice === ROCK ) {
    //     return RESULT_PLAYER_WINS;
    // } else {
    //     return RESULT_COMPUTER_WINS;
    // }
// }

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return ;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    console.log(`The player selected ${playerChoice}`);
    const computerChoice = getComputerChoice();
    console.log(`The computer selected ${computerChoice}`);
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);
});

// startGame();
