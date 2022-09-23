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

//game fuctions
function getComputerChoice(array) {
    let randomNum = array[Math.floor(Math.random() * array.length)];
    return randomNum;
}

function playRound(playerSelection, computerSelection) {
    if(
    playerSelection === r && computerSelection === r ||
    playerSelection === s && computerSelection === s ||
    playerSelection === pp && computerSelection === pp 
    ) {
        ties++;
        return "It's a tie!";
    } else if(
        playerSelection === r && computerSelection === pp
    )   {
        computerScore++;
        return `You Lose this round, ${paperOverRock}!`;
    } else if(
        playerSelection === r && computerSelection === s
    )   {
        playerScore++;
        return `You Win this round, ${rockOverScissors}!`;
    } else if(
        playerSelection === pp && computerSelection === r
    )   {
        playerScore++;
        return `You Win this round, ${paperOverRock}`;
    } else if(
        playerSelection === pp && computerSelection === s 
    )   {
        computerScore++;
        return `You Lose this round, ${scissorsOverPaper}!`;
    } else if(
        playerSelection === s && computerSelection === pp 
    )   {
        playerScore++;
        return `You Win this round, ${scissorsOverPaper}!`;
    } else if(
        playerSelection === s && computerSelection === r 
    )   {
        computerScore++;
        return `You Lose this round, ${rockOverScissors}!`;
    } 
    else {
        console.log("error, something is wrong");
        return 'Something is wrong with your code';
    }
}

function game() {
    for(let i =0; i < 5; i++) {
        playerChoice = prompt('rock, paper, or scissors? ');
        playerSelection = playerChoice.toLowerCase();
        computerSelection = getComputerChoice(choicesArray);
        console.log(playRound(playerSelection,computerSelection));
        console.log('i: ', i);
        console.log('player:', playerSelection, 'computer:', computerSelection);
        console.log('p-score:', playerScore, 'c-score:', computerScore);
        console.log('*****************************');
    }
    if( playerScore > computerScore) {
        console.log('YOU WIN! GAME OVER!');
    } else if ( computerScore > playerScore) {
        console.log('YOU LOST! GAME OVER!!')
    }   else {
        console.log("IT'S A TIE!, GAME OVER!!!")
    }
        console.log('ties: ', ties);
        console.log('comp: ', computerScore);
        console.log('player: ', playerScore);
}
//call game function
game();