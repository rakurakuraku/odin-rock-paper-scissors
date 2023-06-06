//define possible choices (R, P, S)
    //each one a variable?
    //can you make variables < or > (as if they were numbers?)
//define how each choice interacts with the others
//determine player choice
    //case sensitivity?
//determine computer choice
    //how to make it random?
        //pick a number, 0 = rock, 1 = paper 2 = scissors
/*
let cpuChoice = '';
let playerChoice = '';
let message = '';


function computerChoice() { 
    if (Math.floor(Math.random() * 3) === 0) {
        cpuChoice = 'rock';}
    if (Math.floor(Math.random() * 3) === 1) {
        cpuChoice = 'paper';}
    if (Math.floor(Math.random() * 3) === 2) {
        cpuChoice = 'scissors';}
    return(cpuChoice);
    }
*/
//determine outcome


let cpuChoice;
let message;
let playerChoice;

function computerChoice() { 
    if (Math.floor(Math.random() * 3) === 0) {
        cpuChoice = 'rock';}
    if (Math.floor(Math.random() * 3) === 1) {
        cpuChoice = 'paper';}
    if (Math.floor(Math.random() * 3) === 2) {
        cpuChoice = 'scissors';}
    return(cpuChoice);
    }

function findWinner(playerChoice, cpuChoice) {
    if ((playerChoice === 'rock') && (cpuChoice === 'scissors') ||
        (playerChoice === 'paper') && (cpuChoice === 'rock') ||
        (playerChoice === 'scissors') && (cpuChoice === 'paper')) {
//        playerScore = (playerScore + 1);
//        cpuScore = (cpuScore + 0);
        message = 'You Win!' /* + [playerChoice] + beats + [cpuChoice]*/;
    }
    if ((cpuChoice === 'rock') && (playerChoice === 'scissors') ||
        (cpuChoice === 'paper') && (playerChoice === 'rock') ||
        (cpuChoice === 'scissors') && (playerChoice === 'paper')) {
//        playerScore = (playerScore + 0);
//        cpuScore = (cpuScore + 1);
        message = 'You Lose!' /* + [cpuChoice] + beats + [playerChoice]'*/;
    }
    if (playerChoice === cpuChoice) {
        message = 'Draw!'
    }
    return(message);
}

function oneRound() {
    playerChoice = prompt('Rock, Paper, Scissors. Shoot! \nYour choice?')
    cpuChoice = computerChoice();
    findWinner(playerChoice, cpuChoice);
    console.log(message);
}

//    
//


    //win, lose, draw?
    //compare player and cpu choices and give winner (rules are in function)
    //could break into 'you win' and 'they win' scenarios
    //what are the rules for a draw? 0 points? re-play?
    //both choices should be rendered to all lowercase internally.
    //if playerChoice === cpuChoice result = draw (and points = XX)
//communicate result to player

//later
//assign score for each round
//keep score (up to 5)
//declare winner at end of game (5 rounds)