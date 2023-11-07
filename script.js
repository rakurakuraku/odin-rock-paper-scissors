
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
let roundOutcome;
let playerChoice;
let playerScore = 0;
let cpuScore = 0;
let roundCount;

let selectors = document.querySelector('#selectors');
let messagePane = document.querySelector('#messagePane');
let oneUpScore = document.querySelector('#oneUpScore');
let twoUpScore = document.querySelector('#twoUpScore');

selectors.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            //console.log('rock');
            playerChoice = 'Rock'
            oneRound()
            break;
    }
    switch(target.id) {
        case 'paper':
            //console.log('paper');
            playerChoice = 'Paper'
            oneRound()
            break;
    }
    switch(target.id) {
        case 'scissors':
            //console.log('scissors');
            playerChoice = 'Scissors'
            oneRound()
            break;
    }
});

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
        roundOutcome = 'You Win! ' + man + ' beats ' + machine;
        console.log(playerScore);
    }
    if ((machine === 'Rock') && (man === 'Scissors') ||
        (machine === 'Paper') && (man === 'Rock') ||
        (machine === 'Scissors') && (man === 'Paper')) {
        ++ cpuScore;
        roundOutcome = 'You Lose! ' + machine + ' beats ' + man;
        console.log(cpuScore);
    }
    if (man === machine) {
        roundOutcome = 'Draw!'
    }
    return(roundOutcome);
}

/*function capitalize(str) {
    let inter = str.toLowerCase();
    let toCap = inter.slice(0,1);
    let cap = toCap.toUpperCase();
    return(cap + inter.slice(1));
  }
*/
function oneRound() {
    //playerChoice = capitalize(prompt('Rock, Paper, Scissors. Shoot! \nYour choice?'));
    
    cpuChoice = computerChoice();
    findWinner(playerChoice, cpuChoice);
    ++ roundCount;
    console.log(roundOutcome);
    messagePane.textContent = roundOutcome;
    oneUpScore.textContent = '1UP: ' + playerScore;
    twoUpScore.textContent = 'CPU: ' + cpuScore;
}

    //what are the rules for a draw? 0 points.
    //playerChoice input is rendered to all lowercase internally.
    //message customized according to outcome
    //scores are 1 point for a win, 0 for loss or draw
    //message case capitalized at source rather than when forming message
    //communicate result to player via message variable


// game of 5 rounds
function game() {
       let finalMessage;
       roundCount = 0;
       playerScore = 0;
       cpuScore = 0;
       while (roundCount < 5) {
          oneRound();
}
        if (playerScore > cpuScore) {
            finalMessage = playerScore + " - " + cpuScore + ". " + "You win!";
        }
        if (cpuScore > playerScore) {
            finalMessage = playerScore + " - " + cpuScore + ". " + "You lose!";
        }
        if (cpuScore === playerScore) {
            finalMessage = playerScore + " - " + cpuScore + ". " + "It's a draw!";
        }
        console.log(finalMessage);
}