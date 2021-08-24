function computerPlay() {
    choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random()*3)];
}

let compScore = 0;
let playerScore = 0;
let playerWin;
let compWin;
function playRound(playerchoice, compchoice) {


    console.log(`Player chose ${playerchoice} while computer chose ${compchoice}`);
    
    if ((compchoice == 'Rock' && playerchoice == 'paper') || 
    (compchoice == 'Paper' && playerchoice == 'scissors') ||
    (compchoice == 'Scissors' && playerchoice == 'rock')
    ) {
        playerScore++;
        playerWin = true;
        compWin = false;
        return 'Player Wins';
    }

    else if ((compchoice == 'Rock' && playerchoice == 'scissors') || 
    (compchoice == 'Paper' && playerchoice == 'rock') ||
    (compchoice == 'Scissors' && playerchoice == 'paper')) 
    {   
        compScore++;
        compWin = true;
        playerWin = false;
        return 'Computer Wins!';
    }

    else if ((compchoice == 'Rock' && playerchoice == 'rock') || 
    (compchoice == 'Paper' && playerchoice == 'paper') ||
    (compchoice == 'Scissors' && playerchoice == 'scissors')) 
    {
        playerWin = false;
        compWin = false;
        return 'Draw';
        
    }

}
let playergameswon = 0;
let compgameswon = 0;

function game() {

    for (let game = 1; game < 6; game++) {
        computer = computerPlay();
        console.log(playRound(prompt('Rock, paper or scissors').toLowerCase(), computer));
    
        if (playerWin) {
            playergameswon++
        }
        else if (compWin) {
            compgameswon++
        }
    }
    
    if (playergameswon > compgameswon) {
        console.log('You Win! Congratulations!')
    }
    else if (playergameswon < compgameswon) {
        console.log('The Computer Wins. Try again next time!')
    }
    else {
        console.log("It's a draw!")
    }
}


game();
