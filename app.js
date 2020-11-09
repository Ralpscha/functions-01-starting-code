// const startGameBtn = document.getElementById('start-game-btn');
// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const DEFAULT_USER_CHOICE = ROCK;
// const RESULT_DRAW = 'DRAW';
// const RESULT_PLAYER_WINS = 'The player has won';
// const RESULT_COMPUTER_WINS = 'The computer has won';
//
// let gameIsRunning = false;
//
// const getPlayerChoice = () => {
//     const selection = prompt(
//         `Please choose ${ROCK}, ${PAPER}, ${SCISSORS}`,
//         ''
//     ).toUpperCase();
//     if (
//         selection !== ROCK &&
//         selection !== PAPER &&
//         selection !== SCISSORS
//     ) {
//         alert(`we choose ${DEFAULT_USER_CHOICE} for you !`);
//         return;
//     }
//     return selection;
// }
//
// const getComputerChoice = () => {
//     const randomValue = Math.random();
//     if (randomValue < 0.34) {
//         return ROCK;
//     } else if (randomValue < 0.67) {
//         return PAPER;
//     } else {
//         return SCISSORS;
//     }
// };
//
// const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
//     cChoice === pChoice
//         ? RESULT_DRAW
//         : (cChoice === ROCK && pChoice === PAPER) ||
//         (cChoice === PAPER && pChoice === SCISSORS) ||
//         (cChoice === SCISSORS && pChoice === ROCK)
//         ? RESULT_PLAYER_WINS
//         : RESULT_COMPUTER_WINS;
//
// startGameBtn.addEventListener('click', () => {
//     if (gameIsRunning) {
//         return ;
//     }
//     gameIsRunning = true;
//     console.log('Game is starting...');
//     const playerChoice = getPlayerChoice();
//     console.log(`player value is ${playerChoice}`);
//     const computerChoice = getComputerChoice();
//     console.log(`computer choice is ${computerChoice}`);
//     let winner;
//     if(playerChoice) {
//         winner = getWinner(computerChoice, playerChoice);
//     } else {
//         winner = getWinner(computerChoice);
//     }
//
//     let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE} and the computer picked ${computerChoice} so `;
//     if (winner === RESULT_DRAW) {
//        message = message + 'you had a draw.';
//     } else if (winner === RESULT_PLAYER_WINS) {
//         message = message + 'the player won.';
//     } else {
//         message = message + 'the computer won.';
//     }
//     alert(message);
//     gameIsRunning = false;
// });

// not related to the game

const sumUp = (resultHandler, message, ...numbers) => {
    const validateNum = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for(const number of numbers) {
        sum += validateNum(number);
    }
    resultHandler(sum, message);
};

const subtractUp = (resultHandler, message, ...numbers) => {
    const validateNum = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for(const number of numbers) {
        sum -= validateNum(number);
    }
    resultHandler(sum, message);
}

const showResult = (result, message)=> {
    alert(message + result);
}

subtractUp(showResult, 'The result after subtracting the numbers is ', 10,'hi',2);
sumUp(showResult, 'The result after adding the numbers is ',  1,3,4);



