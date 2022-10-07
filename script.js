//game variables
let choicesArray = ['rock', 'paper', 'scissors'];

let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

let r = rock.toLowerCase();
let s = scissors.toLowerCase();
let pp = paper.toLowerCase();

let rockOverScissors = 'rock beats scissors';
let scissorsOverPaper = 'scissors beats paper';
let paperOverRock = 'paper beats rock';

let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
let ties = 0;

let results = document.querySelector('.results');

let playersScore = document.createElement('p');
let playerDiv = document.querySelector('#player-score');
playerDiv.appendChild(playersScore);

let scoreBoard = document.querySelector('#score-board');

let compScore = document.createElement('p');
let compDiv = document.querySelector('#comp-score');
compDiv.appendChild(compScore);

let gameTies = document.createElement('p');
let tiesDiv = document.querySelector('#ties');
tiesDiv.appendChild(gameTies);

let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('.btn');
let playAgain = document.querySelector('#play-again');

let start = document.querySelector('div.start button');
// start.style.marginTop = '20px';
let startDiv = document.querySelector('.start-game');

//game fuctions
function getComputerChoice(array) {
    let randomNum = array[Math.floor(Math.random() * array.length)];
    return randomNum;
}
(function initialState() {
    buttons.classList.add('hidden');
})();
function startGame() {
    btn.disabled = false;
    scoreBoard.classList.remove('hidden');
    results.classList.remove('hidden');
    startDiv.classList.add('hidden');
    buttons.classList.remove('hidden');
    console.log('its working');
}
function gameOver() {
    buttons.classList.add('hidden');
}
function playRound(playerSelection, computerSelection) {
    if(
    playerSelection === r && computerSelection === r ||
    playerSelection === s && computerSelection === s ||
    playerSelection === pp && computerSelection === pp 
    ) {
        ties++;
        results.textContent =  "It's a tie!";
    } else if(
        playerSelection === r && computerSelection === pp
    )   {
        computerScore++;
        results.textContent =  `You lose round, ${paperOverRock}!`;
    } else if(
        playerSelection === r && computerSelection === s
    )   {
        playerScore++;
        results.textContent =  `You win round, ${rockOverScissors}!`;
    } else if(
        playerSelection === pp && computerSelection === r
    )   {
        playerScore++;
        results.textContent =  `You win round, ${paperOverRock}`;
    } else if(
        playerSelection === pp && computerSelection === s 
    )   {
        computerScore++;
        results.textContent =  `You lose round, ${scissorsOverPaper}!`;
    } else if(
        playerSelection === s && computerSelection === pp 
    )   {
        playerScore++;
        results.textContent =  `You win round, ${scissorsOverPaper}!`;
    } else if(
        playerSelection === s && computerSelection === r 
    )   {
        computerScore++;
        results.textContent =  `You lose round, ${rockOverScissors}!`;
    } 
    else {
        console.log("error, something is wrong");
        results.textContent =  'Something is wrong with your code';
    }

    playersScore.textContent = `${playerScore}`;
    compScore.textContent = `${computerScore}`;
    gameTies.textContent = `${ties}`;

    if( playerScore === 5) {
        // buttons.style.display = 'none';
        results.textContent = 'YOU WIN! GAME OVER!';
        playAgain.classList.remove('hidden');
        playAgain.classList.add('unhide');
        gameOver();        
    } else if ( computerScore === 5) {
        // buttons.style.display = 'none';
        results.textContent = 'YOU LOST! GAME OVER!!';
        playAgain.classList.remove('hidden');
        playAgain.classList.add('unhide');
        gameOver();
    }   
}

//call game function
let rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice(choicesArray)));

let paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice(choicesArray)));

let scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice(choicesArray)));

start.addEventListener('click', startGame);

playAgain.addEventListener('click', () => window.location.reload());
