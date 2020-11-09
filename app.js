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

const ADD_MESSAGE = 'The result after adding the numbers is ';
const SUBTRACT_MESSAGE = 'The result after subtracting the numbers is ';

const combine = (resultHandler, operation, ...numbers) => {
    const validateNum = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for(const number of numbers) {
        if(operation === 'ADD') {
            sum += validateNum(number);
        } else {
            sum -= validateNum(number);
        }

    }
    resultHandler(sum);
};

// const subtractUp = (resultHandler, ...numbers) => {
//     const validateNum = (number) => {
//         return isNaN(number) ? 0 : number;
//     }
//     let sum = 0;
//     for(const number of numbers) {
//         sum -= validateNum(number);
//     }
//     resultHandler(sum, 'The result after subtracting the numbers is ');
// }

const showResult = (messageText, result)=> {
    alert(messageText + result);
}

combine(showResult.bind(this, ADD_MESSAGE),'ADD', 10,'hi',2);
combine(showResult.bind(this, SUBTRACT_MESSAGE), 'SUBTRACT', 1,3, 'potato',4);



