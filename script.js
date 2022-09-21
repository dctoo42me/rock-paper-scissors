let choicesArray = ['rock', 'paper', 'scissors'];
let getComputerChoice = (array) =>  array[Math.floor(Math.random() * array.length)];

let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

let r = rock.toLowerCase();
let s = scissors.toLowerCase();
let pp = paper.toLowerCase();

let rockOverScissors = 'rock beats scissors';
let scissorsOverPaper = 'scissors beats paper';
let paperOverRock = 'paper beats rock';

const playerSelection = r;
const computerSelection = getComputerChoice(choicesArray);
// const computerSelection = pp;

function playRound(playerSelection, computerSelection) {
    if(
        playerSelection === r && computerSelection === r ||
        playerSelection === s && computerSelection === s ||
        playerSelection === pp && computerSelection === pp 
        ) {
            return "It's a tie!";
        } else if(
            playerSelection === r && computerSelection === pp
        )   {
            return `You Lose, ${paperOverRock}!`;
        } else if(
            playerSelection === r && computerSelection === s 
        )   {
            return `You Win, ${rockOverScissors}!`;
        } else if(
            playerSelection === pp && computerSelection === r
        )   {
            return `You Win, ${paperOverRock}`;
        } else if(
            playerSelection === pp && computerSelection === s 
        )   {
            return `You Lose, ${scissorsOverPaper}!`;
        } else if(
            playerSelection === s && computerSelection === pp 
        )   {
            return `You Win, ${scissorsOverPaper}!`;
        } else if(
            playerSelection === s && computerSelection === r 
        )   {
            return `You Lose, ${rockOverScissors}!`;
        } 
        else {
            return 'Something is terribly wrong with your code';
        }
}
    
    console.log(playRound(playerSelection,computerSelection));

    console.log('comp: ', computerSelection);
    console.log('player: ',playerSelection);