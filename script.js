
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

let selectors = document.getElementById('selectors');
let messagePane = document.querySelector('#messagePane');
let oneUpScore = document.querySelector('#oneUpScore');
let twoUpScore = document.querySelector('#twoUpScore');



selectors.addEventListener('click', function(event) {
    let target = event.target;
    console.log(event.target);

    const isButton = target.tagname === 'BUTTON' || target.closest('button');

    if (isButton) {

        const clicked = target.closest('button');
        const buttonId = clicked.id;

    switch(buttonId) {
        case 'rock':
            console.log('rock');
            //playerChoice = 'Rock'
            findWinner('Rock', computerChoice());
            //game();
            break;
    
    
        case 'paper':
            console.log('paper');
            //playerChoice = 'Paper'
            findWinner('Paper', computerChoice());
            //game();
            break;
    
    
        case 'scissors':
            console.log('scissors');
            //playerChoice = 'Scissors'
            findWinner('Scissors', computerChoice());
            //game();
            break;
    }
    //findWinner(playerChoice, computerChoice);
    game();
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
    cpuChoice = computerChoice();
    if ((man === 'Rock') && (machine === 'Scissors') ||
        (man === 'Paper') && (machine === 'Rock') ||
        (man === 'Scissors') && (machine === 'Paper')) {
        ++ playerScore;
        roundOutcome = 'You Win! ' + man + ' beats ' + machine;
        //console.log(playerScore);
    }
    if ((machine === 'Rock') && (man === 'Scissors') ||
        (machine === 'Paper') && (man === 'Rock') ||
        (machine === 'Scissors') && (man === 'Paper')) {
        ++ cpuScore;
        roundOutcome = 'You Lose! ' + machine + ' beats ' + man;
        //console.log(cpuScore);
    }
    if (man === machine) {
        roundOutcome = 'Draw!'
    }

    messagePane.textContent = roundOutcome;
    oneUpScore.textContent = playerScore;
    twoUpScore.textContent = cpuScore;
    //return(roundOutcome);
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
    //++ roundCount;
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
       //let finalMessage;
       //roundCount = 0;
       //playerScore = 0;
       //cpuScore = 0;
       //while ((playerScore < 5 && cpuScore <= 4) || (cpuScore < 5 && playerScore <= 4)) {
        
//}
    //let finalScore = '';
        if (playerScore == 5) {
            messagePane.textContent = playerScore + " - " + cpuScore + ". " + "You win!";
            playerScore = 0;
            cpuScore = 0;
        }
        if (cpuScore  == 5) {
            messagePane.textContent = playerScore + " - " + cpuScore + ". " + "You lose!";
            playerScore = 0;
            cpuScore = 0;
        }
        //if (cpuScore === playerScore) {
        //    finalMessage = playerScore + " - " + cpuScore + ". " + "It's a draw!";
        // }
        //console.log(finalMessage);
}