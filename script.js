
//define how each choice interacts with the others
//determine player choice
    //case sensitivity?
//determine computer choice
    //how to make it random?
        //pick a number, 0 = rock, 1 = paper 2 = scissors
/*

*/
//determine outcome


let cpuChoice;
let message;
let playerChoice;
let playerScore = 0;
let cpuScore = 0;
let roundCount = 0;

function computerChoice() { 
    if (Math.floor(Math.random() * 3) === 0) {
        cpuChoice = 'Rock';}
    if (Math.floor(Math.random() * 3) === 1) {
        cpuChoice = 'Paper';}
    if (Math.floor(Math.random() * 3) === 2) {
        cpuChoice = 'Scissors';}
    return(cpuChoice);
    }

function findWinner(man, machine) {
    if ((man === 'Rock') && (machine === 'Scissors') ||
        (man === 'Paper') && (machine === 'Rock') ||
        (man === 'Scissors') && (machine === 'Paper')) {
        ++ playerScore;
        message = 'You Win! ' + man + ' beats ' + machine;
    }
    if ((machine === 'Rock') && (man === 'Scissors') ||
        (machine === 'Paper') && (man === 'Rock') ||
        (machine === 'Scissors') && (man === 'Paper')) {
        ++ cpuScore;
        message = 'You Lose! ' + machine + ' beats ' + man;
    }
    if (man === machine) {
        message = 'Draw!'
    }
    return(message);
}

function capitalize(str) {
    let inter = str.toLowerCase();
    let toCap = inter.slice(0,1);
    let cap = toCap.toUpperCase();
    return(cap + inter.slice(1));
  }

function oneRound() {
    playerChoice = capitalize(prompt('Rock, Paper, Scissors. Shoot! \nYour choice?'));
    cpuChoice = computerChoice();
    findWinner(playerChoice, cpuChoice);
    ++ roundCount;
    console.log(message);
}

    //what are the rules for a draw? 0 points.
    //playerChoice input is rendered to all lowercase internally.
    //message customized according to outcome
    //scores are 1 point for a win, 0 for loss or draw
    //message case capitalized at source rather than when forming message
    //communicate result to player via message variable

//later
//declare winner at end of game (5 rounds)